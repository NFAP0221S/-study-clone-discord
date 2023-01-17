import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Typography } from "@mui/material";
import { register } from "../../../store/actions/authThunks";
import AuthBox from "../../../shared/components/AuthBox";
import RegisterPageInputs from "./RegisterPageInputs";
import RegisterPageFooter from "./RegisterPageFooter";
import { validateRegisterForm } from "../../../shared/utils/validators";

const RegisterPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const [mail, setMail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);

  const handleRegister = () => {
    console.log(mail);
    console.log(username);
    console.log(password);
    console.log("registering");
    dispatch(
      register({
        // userDetails: { mail: mail, password: password, username: username },
        email: mail,
        password: password,
        username: username,
      })
    );
  };

  useEffect(() => {
    setIsFormValid(
      validateRegisterForm({
        mail,
        username,
        password,
      })
    );
  }, [mail, username, password]);

  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: "white" }}>
        Create an account
      </Typography>
      <RegisterPageInputs
        mail={mail}
        setMail={setMail}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
      <RegisterPageFooter
        handleRegister={handleRegister}
        isFormValid={isFormValid}
      />
    </AuthBox>
  );
};

export default RegisterPage;
