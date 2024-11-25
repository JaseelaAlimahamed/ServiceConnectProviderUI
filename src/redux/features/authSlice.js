import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  accessToken: null,
  refreshToken: null,
  user: {}
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
      state.refreshToken = action.payload.refresh
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.accessToken = null;
      state.refreshToken = null;
      state.user = {};
    },
    setUserData: (state, action) => {
      state.user = action.payload;

    }
  },
});

export const { setLoginStatus, logout,setUserData, clearAccessToken, setAccessToken } = authSlice.actions;
export default authSlice.reducer;
