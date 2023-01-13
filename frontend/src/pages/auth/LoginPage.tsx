import React, { useState } from "react";
import AuthBox from "../../shared/components/AuthBox";
import LoginPageHeader from "./LoginPageHeader";
import LoginPageInputs from "./LoginPageInputs";
import LoginPageFooter from "./LoginPageFooter";

const LoginPage = (): JSX.Element => {
  const [mail, setMail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const handleLogin = () => {
    console.log("login in");
  };

  return (
    <AuthBox>
      <LoginPageHeader />
      <LoginPageInputs
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
      />
      <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin} />
    </AuthBox>
  );
};

export default LoginPage;
