import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const config = {
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/yourDatabase",
  PORT: process.env.PORT || 5000,
  frontend_url: process.env.FRONTEND_URL || "http://localhost:5173",
};

export default config;
