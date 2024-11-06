import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoginStatus: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { setLoginStatus, logout } = authSlice.actions;
export default authSlice.reducer;
