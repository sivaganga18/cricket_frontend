import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoggedIn: (state, action) => {
      state.isLoginSuccess = true;
      state.isLoggedIn = true;
    },
  },
});

/**
 * Actions
 */
export const { setLoggedIn } = authSlice.actions;

/**
 * Reducers
 */
export const authReducer = authSlice.reducer;
