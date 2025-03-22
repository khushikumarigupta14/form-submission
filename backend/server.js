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
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || origin === config.frontend_url) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", config.frontend_url);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json());

// Routes
app.use("/api/form", formRoutes);

// Connect to MongoDB
connectDB();
const port = config.PORT || 5001; 
app.listen(port, () => console.log(`Server running on port ${port}`));
