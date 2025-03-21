import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // Replace with your backend URL

// Create an Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Submit form data-->post
export const submitFormData = async (formData) => {
  try {
    const response = await api.post("/api/form", formData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to submit form data";
  }
};

// Fetch form data--> get
export const fetchFormData = async (id) => {
  try {
    const response = await api.get(`/api/form/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to fetch form data";
  }
};
