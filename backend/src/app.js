import express from "express";

import bodyParser from "body-parser";
import mongoSanitize from "express-mongo-sanitize";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import morgan from "morgan";
import { appError } from "./utils/app-error.js";

// import xss from 'xss-clean';
// import hpp from 'hpp'

export const app = express();

// GLOBAL MIDDLEWARES
app.use(helmet());

// Limit The Request from same IP;
const limiter = rateLimit({
  limit: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP. Try again after 45 minutes",
});

// DEVELOMPMENT LGGING ONLY
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// TO ACCEPT BODY IN THE REQUEST
app.use(express.json({ limit: "100kb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// TO SERVE STATIC FILES
app.use(express.static("./public"));

// TO PREVENT BRUTE-FORCE/DOC ATTACK
app.use("/api", limiter);

// Sanitize data against noSQL query injection
app.use(mongoSanitize());

// Sanitization againt XSS attacks
// app.use(xss());

// Preventing the url population
// app.use(
//     hpp({
//       whitelist: ['price', 'duration', 'maxGroupSize', 'difficulty', 'ratingsAverage']
//     })
//   );

app.use((req, _, next) => {
  //   req.requestTime = new Date().toISOString();
  next();
});

app.all("*", (req, _, next) => {
  next(new appError(`Can't find ${req.originalUrl} on this server`, 404));
});

// GLOBAL ERROR HANDLER
