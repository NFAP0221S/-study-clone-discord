import axios, { AxiosRequestConfig } from "axios";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

// const apiClient = axios.create({
//   baseURL: "http://localhost:5002/api",
//   timeout: 1000,
// });

axios.defaults.baseURL = "http://localhost:5002/api";
// axios.defaults.withCredentials = true; // front, backend 간 쿠키공유

export const login: any = createAsyncThunk(
  "auth/login",
  // data => userDetails
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post("/auth/login", data);
      return response.data;
    } catch (error: any) {
      // localStorage.setItem("user", JSON.stringify(data));
      return rejectWithValue(error.response.data);
    }
  }
);

export const register: any = createAsyncThunk(
  "/auth/register",
  // data => userDetails
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post("/auth/register", data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
