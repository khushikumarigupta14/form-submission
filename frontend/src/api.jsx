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
// Update form data (PUT)
export const updateFormData = async (id, updatedData) => {
  try {
    const response = await api.put(`/api/form/${id}`, updatedData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to update form data";
  }
};

//  Soft delete form data (DELETE)
export const softDeleteFormData = async (id) => {
  try {
    const response = await api.delete(`/api/form/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to delete form data";
  }
};
