import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import loginReducer from "./authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    login: loginReducer,
  },
});

export default store;
