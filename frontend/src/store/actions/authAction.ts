import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { logout } from "../../shared/utils/auth";

const instance = axios.create({
  baseURL: "http://localhost:5002/api",
  timeout: 1000,
});

// 요청 인터셉터 -> then 또는  catch로 처리되기 전에 응답을 가로챌수 있음
instance.interceptors.request.use(
  (config) => {
    const userDetails = localStorage.getItem("user");

    if (userDetails) {
      const token = JSON.parse(userDetails).token;
      // config.headers.Authorization = `Bearer ${token}`;
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
    // header에 토큰 추가
    return config;
  },
  (err) => {
    // 에러일 시 거부
    return Promise.reject(err);
  }
);

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
