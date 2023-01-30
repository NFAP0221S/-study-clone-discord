import { instance } from "./instance";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { logout } from "../../shared/utils/auth";
import { openAlertMessage } from "../reducers/alert";

export const sendFriendInvitation: any = createAsyncThunk(
  "/friend-invitation/invite",
  async (data, { rejectWithValue }) => {
    try {
      console.log("data", data);
      const response = await instance.post("/friend-invitation/invite", data);
      //   await instance.post("/friend-invitation/invite", data);
      openAlertMessage("Invitation has been sent!");
      return response.data;
    } catch (err: any) {
      return rejectWithValue(
        // openAlertMessage(err.response.exception?.response?.data)
        openAlertMessage(err.response?.data)
      );
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
