import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    clearAccessToken: (state) => {
      state.accessToken = null;
    },
    setLoginStatus: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.accessToken = null;
    },
  },
});

export const { setLoginStatus, logout, clearAccessToken, setAccessToken } = authSlice.actions;
export default authSlice.reducer;
