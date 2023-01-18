import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../../store/actions/authThunks";
import AuthBox from "../../../shared/components/AuthBox";
import LoginPageHeader from "../login/LoginPageHeader";
import LoginPageInputs from "../login/LoginPageInputs";
import LoginPageFooter from "../login/LoginPageFooter";
import { validateLoginForm } from "../../../shared/utils/validators";

const LoginPage = (): JSX.Element => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loginDone } = useSelector((state: any) => state.user);

  const [mail, setMail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  useEffect(() => {
    if (loginDone) {
      navigate("/dashboard");
    }
  }, [navigate, loginDone]);

  useEffect(() => {
    setIsFormValid(validateLoginForm({ mail, password }));
  }, [mail, password]);

  const handleLogin = () => {
    console.log(mail);
    console.log(password);
    console.log("login in");
    const userDetails = {
      email: mail,
      password: password,
    };
    // dispatch(login(userDetails));
    dispatch(login({ email: mail, password: password }));
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
