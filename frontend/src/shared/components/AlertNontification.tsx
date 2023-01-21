import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { closeAlertMessage } from "../../store/reducers/alert";

const AlertNontification = () => {
  const dispatch = useDispatch();
  const { showAlertMessasge, alertMessageContent } = useSelector(
    (state: any) => state.alert
  );
  const [toggle, setToggle] = useState<boolean>(true);

  useEffect(() => {
    if (!toggle) {
      dispatch(closeAlertMessage());
    }
  }, [toggle, dispatch]);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setToggle(false);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={showAlertMessasge}
      onClose={handleClose}
      autoHideDuration={6000}
    >
      <Alert severity="info">{alertMessageContent}</Alert>
    </Snackbar>
  );
};

export default AlertNontification;
