import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./redux/FormSlice";

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
});
