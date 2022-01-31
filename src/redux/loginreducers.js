import { createSlice } from "@reduxjs/toolkit";
import {
  getStoreData,
  removeStorageData,
} from "../utils/storage";
const initialState = {
  isLoggedIn: getStoreData("loginData")?.isLoggedIn || false,
  role: getStoreData("loginData")?.role || "",
  accessToken: getStoreData("loginData")?.accessToken || "",
  userid: getStoreData("loginData")?.userid || "",
  name: getStoreData("loginData")?.name || "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.role = action.payload.role;
      state.accessToken = action.payload.accessToken;
      state.userid = action.payload.userid;
      state.name = action.payload.name;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.role = "";
      state.accessToken = "";
      state.userid = "";
      state.name = "";
      removeStorageData("loginData");
    },
  },
});

export const { loginSuccess, logout } = loginSlice.actions;
export default loginSlice.reducer;
