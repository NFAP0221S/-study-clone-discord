import { Typography } from "@mui/material";
import React from "react";
import AuthBox from "../../../shared/components/AuthBox";

const RegisterPage = (): JSX.Element => {
  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: "white" }}>
        Create an account
      </Typography>
    </AuthBox>
  );
};

export default RegisterPage;
