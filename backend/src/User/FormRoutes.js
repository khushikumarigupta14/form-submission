import express from "express";
import { createForm, getFormById } from "./FOrmController.js";

const formRoutes = express.Router();

// POST /api/users - Create a new form
formRoutes.post("/", createForm);

// GET /api/users/:id - Get a single user by ID
formRoutes.get("/:id", getFormById);

export default formRoutes;
