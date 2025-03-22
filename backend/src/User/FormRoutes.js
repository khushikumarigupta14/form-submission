import express from "express";
import {
  createForm,
  getFormById,
  softDeleteForm,
  updateForm,
} from "./FormController.js";

const formRoutes = express.Router();

// POST /api/users - Create a new form
formRoutes.post("/", createForm);

// GET /api/users/:id - Get a single user by ID
formRoutes.get("/:id", getFormById);
formRoutes.put("/:id", updateForm); // Update a form
formRoutes.delete("/:id", softDeleteForm); // Soft delete a form

export default formRoutes;
