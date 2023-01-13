import React from "react";
import CustomPrimaryButton from "../../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../../shared/components/RedirectInfo";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { Tooltip } from "@mui/material";

interface LoginPageFooterProps {
  handleLogin: () => void;
  isFormValid: boolean;
}

const getFormNotValidMessage = (): string => {
  return "이메일을 올바르게 입력해주세요. 비밀번호는 6 ~ 12의 길이여야 합니다.";
};
const getFormValidMessage = (): string => {
  return "로그인이 가능합니다!";
};

const LoginPageFooter = ({
  handleLogin,
  isFormValid,
}: LoginPageFooterProps): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  const handlePushToRegisterPage = (): void => {
    navigate("/register");
  };

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Log-in"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Need an account?"
        redirectText="Create an account"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToRegisterPage}
      />
    </>
  );
};

export default LoginPageFooter;
