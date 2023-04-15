import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  auth: false,
  errors: [],
  loading: false,
};

// register

export const registerUser = createAsyncThunk(
  "/auth/registerUser",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post("api/auth/signup", data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(registerUser.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.auth = true;
        state.loading = false;
        localStorage.setItem("token", payload.token);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.user = null;
        state.auth = false;
        state.loading = false;
        state.errors = payload;
      });
  },
});
//login

export const loginUser = createAsyncThunk(
  "/auth/loginUser",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post("api/auth/signin", data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors);
    }
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.user.email = payload.user.email;
        state.user.password= payload.user.password;
        state.login = true;
        state.loading = false;
        localStorage.setItem("token", payload.token);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.user = null;
      
        state.login = false;
        state.loading = false;
        state.errors = payload;
      });
  },
});
export default authSlice.reducer;
