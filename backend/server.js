// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import config from "./src/config/config.js";
import formRoutes from "./src/User/FormRoutes.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/form", formRoutes);

// Connect to MongoDB
connectDB();
const port = config.PORT || 5001; // Use a different port
app.listen(port, () => console.log(`Server running on port ${port}`));
