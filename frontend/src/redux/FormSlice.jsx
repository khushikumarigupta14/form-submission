import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  submitFormData,
  fetchFormData,
  updateFormData,
  softDeleteFormData,
} from "../api";

// Initial state
const initialState = {
  formData: null, // Holds the submitted form data
  loading: false, // Indicates if the form is being submitted or fetched
  error: null, // Holds any error messages
};

// Async Thunk to submit form data
export const submitForm = createAsyncThunk(
  "form/submitForm",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await submitFormData(formData);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Async Thunk to fetch form data by ID
export const fetchForm = createAsyncThunk(
  "form/fetchForm",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetchFormData(id);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
//  Async Thunk to update form data (PUT)
export const updateForm = createAsyncThunk(
  "form/updateForm",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await updateFormData(id, updatedData);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//  Async Thunk to soft delete form data (DELETE)
export const deleteForm = createAsyncThunk(
  "form/deleteForm",
  async (id, { rejectWithValue }) => {
    try {
      const response = await softDeleteFormData(id);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
// Create the form slice
const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    // Add synchronous reducers here if needed
    resetFormState: (state) => {
      state.formData = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // 🔹 Submit Form
      .addCase(submitForm.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitForm.fulfilled, (state, action) => {
        state.loading = false;
        state.formData = action.payload;
      })
      .addCase(submitForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // 🔹 Fetch Form
      .addCase(fetchForm.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchForm.fulfilled, (state, action) => {
        state.loading = false;
        state.formData = action.payload;
      })
      .addCase(fetchForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // 🔹 Update Form
      .addCase(updateForm.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateForm.fulfilled, (state, action) => {
        state.loading = false;
        state.formData = action.payload;
      })
      .addCase(updateForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // 🔹 Soft Delete Form
      .addCase(deleteForm.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteForm.fulfilled, (state) => {
        state.loading = false;
        state.formData = null; // Clear form data after deletion
      })
      .addCase(deleteForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export actions
export const { resetFormState } = formSlice.actions;

// Export the reducer
export default formSlice.reducer;
