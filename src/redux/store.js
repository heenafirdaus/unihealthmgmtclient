import { configureStore } from "@reduxjs/toolkit";
import loginreducers from "./loginreducers";

export const store = configureStore({
  reducer: {
    login: loginreducers,
  },
});
