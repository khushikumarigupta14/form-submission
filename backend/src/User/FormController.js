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


// ✅ Edit (Update) a form
export const updateForm = async (req, res) => {
  try {
    const updatedForm = await Form.findOneAndUpdate(
      { _id: req.params.id, deleted: false }, // Ensure it's not deleted
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedForm) {
      return res.status(404).json({ message: "Form not found" });
    }

    res
      .status(200)
      .json({ message: "Form updated successfully", form: updatedForm });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating form", error: error.message });
  }
};

// (Mark as deleted)
export const softDeleteForm = async (req, res) => {
  try {
    const deletedForm = await Form.findOneAndUpdate(
      { _id: req.params.id, deleted: false },
      { deleted: true },
      { new: true }
    );

    if (!deletedForm) {
      return res.status(404).json({ message: "Form not found" });
    }

    res
      .status(200)
      .json({ message: "Form soft deleted successfully", form: deletedForm });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting form", error: error.message });
  }
};

