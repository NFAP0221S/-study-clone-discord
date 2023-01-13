import React from "react";
import { Typography } from "@mui/material";

const LoginPageHeader = (): JSX.Element => {
  return (
    <>
      <Typography variant="h5" sx={{ color: "white" }}>
        환영합니다!
      </Typography>
      <Typography sx={{ color: "#b9bbbe" }}>하이 하이 하이</Typography>
    </>
  );
};

export default LoginPageHeader;
