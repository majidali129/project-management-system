import express from 'express';

import { logger } from '#loggers/logger.js';
import { globalErrorHandler } from '#middlewares/globalError.middleware.js';
import { apiError } from '#utils/api-error.js';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import userRouter from "./routes/user.route.js";


export const app = express();
const morganFormat = ':method :url :status :response-time ms';


const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
    allowedHeaders: ['Origin', 'Content-Type', 'Accept', 'Authorization'],
    methods: 'GET, POST, PUT, DELETE, OPTIONS',
    allowedOrigins: ['http://localhost:3000', 'http://localhost:5000', 'http://localhost:5173'],
    preflightContinue: true,
}

cors(corsOptions)

// DEVELOMPMENT LGGING ONLY
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.get('/', (req, res) => res.json({ message: 'Hi there from Majid Ali', IP: req.ip }));
// TO ACCEPT BODY IN THE REQUEST
app.use(express.json({ limit: '100kb' }));
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// COMMON MIDDLEWARES
app.use(
    morgan(morganFormat, {
        stream: {
            write: (message) => {
                const logObject = {
                    method: message.split(' ')[0],
                    url: message.split(' ')[1],
                    status: message.split(' ')[2],
                    responseTime: message.split(' ')[3],
                };
                logger.info(JSON.stringify(logObject));
            },
        },
    })
);

// TO SERVE STATIC FILES
app.use(express.static('./public'));


// App Routes;

app.use('/api/users', userRouter)


app.use((req, _, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

app.all('*', (req, _, next) => {
    next(new apiError(`Can't find ${req.originalUrl} on this server.`, 404));
});

// GLOBAL ERROR HANDLER
app.use(globalErrorHandler)
// app.use(globalErrorController)
