// backend/models/User.js
import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  birthDate: { type: Date },
  age: { type: Number },
  gender: { type: String, enum: ["male", "female", "other"] },
  subscribe: { type: Boolean, default: false },
  country: { type: String },
  comments: { type: String },
});

const Form = mongoose.model("Form", formSchema);
export default Form;
