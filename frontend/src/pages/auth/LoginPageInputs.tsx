import React, { Dispatch, SetStateAction } from "react";
import InputWithLabel from "../../shared/components/InputWithLabel";

interface LoginPageInputsProps {
  mail: string;
  setMail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
}

const LoginPageInputs = ({
  mail,
  setMail,
  password,
  setPassword,
}: LoginPageInputsProps): JSX.Element => {
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
