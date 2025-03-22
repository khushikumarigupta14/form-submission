// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import config from "./src/config/config.js";
import formRoutes from "./src/User/FormRoutes.js";

dotenv.config();
const app = express();

const allowedOrigins = [
  config.frontend_url,
  "http://localhost:5173",
  "http://www.localhost:5173",
];
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.use("/api/form", formRoutes);

// Connect to MongoDB
connectDB();
const port = config.PORT || 5001;
app.listen(port, () => console.log(`Server running on port ${port}`));
