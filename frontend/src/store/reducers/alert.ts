import { createSlice } from "@reduxjs/toolkit";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import React, { SyntheticEvent } from "react";

interface AlertMessage {
  showAlertMessasge: boolean;
  // alertMessageContent: null | unknown;
  alertMessageContent: any;
}

const initialState: AlertMessage = {
  showAlertMessasge: false,
  alertMessageContent: null,
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    openAlertMessage(state, action) {
      state.showAlertMessasge = true;
      state.alertMessageContent = action.payload;
    },
    closeAlertMessage(state) {
      state.showAlertMessasge = false;
      state.alertMessageContent = null;
    },
  },
  // extraReducers: (builder) => builder,
});

export const { openAlertMessage, closeAlertMessage } = alertSlice.actions;
export default alertSlice.reducer;
// export const alertAction = alertSlice.actions;
