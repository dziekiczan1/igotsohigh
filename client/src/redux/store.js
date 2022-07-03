import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./noteSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    notes: notesReducer,
    auth: authReducer,
  },
});

export default store;
