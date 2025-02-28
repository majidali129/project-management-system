import dotenv from 'dotenv';
import mongoose from "mongoose";
import { DATABASE_NAME } from "../constants.js";

export const connectDB = async () => {
  dotenv.config({
    path: './'
  })
  console.log(process.env.MONGODB_URI)
  const db_uri = process.env
    .MONGODB_URI.replace("<PASSWORD>", process.env.DATABASE_PASSWORD)
    .replace("<DBNAME>", DATABASE_NAME);
  try {
    const connectionInstance = await mongoose.connect(db_uri);
    console.log(
      `\n MongoDB Connected 🚀🚀 DB Host: ${connectionInstance.connection.host} 🚀🚀 `,
    );
  } catch (error) {
    console.log("MONGODB Connection Error::", error);
    process.exit(1);
  }
};
