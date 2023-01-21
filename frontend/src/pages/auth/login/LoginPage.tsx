import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../../store/actions/authAction";
import AuthBox from "../../../shared/components/AuthBox";
import LoginPageHeader from "../login/LoginPageHeader";
import LoginPageInputs from "../login/LoginPageInputs";
import LoginPageFooter from "../login/LoginPageFooter";
import { validateLoginForm } from "../../../shared/utils/validators";
import { openAlertMessage } from "../../../store/reducers/alert";

const LoginPage = (): JSX.Element => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loginDone, loginError } = useSelector((state: any) => state.user);

  const [mail, setMail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  useEffect(() => {
    if (loginDone) {
      navigate("/dashboard");
    }
  }, [navigate, loginDone]);

  useEffect(() => {
    if (loginError) {
      dispatch(openAlertMessage(loginError));
    }
  }, [dispatch, loginError]);

  useEffect(() => {
    setIsFormValid(validateLoginForm({ mail, password }));
  }, [mail, password]);

  const handleLogin = () => {
    console.log(mail);
    console.log(password);
    console.log("login in");
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
