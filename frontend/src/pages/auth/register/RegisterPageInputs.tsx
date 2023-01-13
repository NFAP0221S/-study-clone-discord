import React, { Dispatch, SetStateAction } from "react";
import InputWithLabel from "../../../shared/components/InputWithLabel";

interface RegisterInputsProps {
  mail: string;
  setMail: Dispatch<SetStateAction<string>>;
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
}

const RegisterPageInputs = ({
  mail,
  setMail,
  username,
  setUsername,
  password,
  setPassword,
}: RegisterInputsProps): JSX.Element => {
  return (
    <>
      <InputWithLabel
        value={mail}
        setValue={setMail}
        label="E-mail address"
        type="text"
        placeholder={"Enter e-mail address"}
      />
      <InputWithLabel
        value={username}
        setValue={setUsername}
        label="Username"
        type="text"
        placeholder={"Enter a username"}
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

export default RegisterPageInputs;
