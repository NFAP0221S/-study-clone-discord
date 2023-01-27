import { instance } from "./instance";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { logout } from "../../shared/utils/auth";

export const login: any = createAsyncThunk(
  "auth/login",
  // data => userDetails
  async (data, { rejectWithValue }) => {
    try {
      const response = await instance.post("/auth/login", data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const register: any = createAsyncThunk(
  "/auth/register",
  // data => userDetails
  async (data, { rejectWithValue }) => {
    try {
      const response = await instance.post("/auth/register", data);
      console.log(data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

// secure routes

const checkResponseCode = (exception: any) => {
  const responseCode = exception?.response?.status;

  if (responseCode) {
    (responseCode === 401 || responseCode === 403) && logout();
  }
};
