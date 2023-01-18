import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const instance = axios.create({
  baseURL: "http://localhost:5002/api",
  timeout: 1000,
});

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
