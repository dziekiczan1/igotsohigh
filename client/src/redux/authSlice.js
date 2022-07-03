import { createSlice } from "@reduxjs/toolkit";
import * as api from "../api";

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch(auth(data));
    navigate("/");
  } catch (error) {
    console.log(error.message);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch(auth(data));
    navigate("/");
  } catch (error) {
    console.log(error.message);
  }
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    authData: null,
  },
  reducers: {
    auth: (state, action) => {
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      return { ...state, authData: action?.payload };
    },
    logOut: (state, action) => {
      localStorage.clear();
      return { ...state, authData: null };
    },
  },
});

// Action creators are generated for each case reducer function
export const { auth, logOut } = authSlice.actions;
export default authSlice.reducer;
