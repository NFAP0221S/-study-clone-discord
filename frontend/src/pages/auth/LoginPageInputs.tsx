import React from "react";
import InputWithLabel from "../../shared/components/InputWithLabel";

const LoginPageInputs = (props: {
  mail: any;
  setMail: any;
  password: any;
  setPassword: any;
}) => {
  const { mail, setMail, password, setPassword } = props;
  return (
    <>
      <InputWithLabel
        value={mail}
        setValue={setMail}
        label="E-mail"
        type="text"
        placeholder={"Enter e-mail address"}
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder={"Enter password"}
      />
    </>
  );
};

export default LoginPageInputs;
