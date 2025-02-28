import dotenv from 'dotenv';
import { app } from "./app.js";
import { connectDB } from "./db/index.js";

dotenv.config()

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error::", error);
      throw error;
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed::", error);
  });

const PORT = process.env.PORT || 8000;
const server = app.listen(process.env.PORT || 8000, () => {
  console.log(`App is listening at PORT: ${PORT}`);
});

process.on("unhandledRejection", (error) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  if (error instanceof Error) {
    console.log(error.name, error.message);
  }
  server.close(() => process.exit(1));
});
