import Form from "../models/FormModel.js";


export const createForm = async (req, res) => {
  try {
    const newform = new Form(req.body);
    await newform.save();
    res
      .status(201)
      .json({ message: "form created successfully!", form: newform });
  } catch (error) {
    if (error.code === 11000) {
      // Duplicate key error (e.g., unique email)
      res.status(400).json({ message: "Email already exists" });
    } else {
      res
        .status(500)
        .json({ message: "Error creating form", error: error.message });
    }
  }
};
export const getFormById = async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form) {
      return res.status(404).json({ message: "form not found" });
    }
    res.status(200).json(form);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching form", error: error.message });
  }
};
