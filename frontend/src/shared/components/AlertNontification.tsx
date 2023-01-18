import React from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const AlertNontification = () => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open
      onClose={() => {}}
      //   autoHideDuration={6000}
    >
      <Alert severity="info">Alert message</Alert>
    </Snackbar>
  );
};

export default AlertNontification;
