import React from "react";
import CustomPrimaryButton from "../../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../../shared/components/RedirectInfo";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { Tooltip } from "@mui/material";

interface RegisterFooterProps {
  handleRegister: () => void;
  isFormValid: boolean;
}

const getFormNotValidMessage = (): string => {
  return "사용자 이름은 3자에서 12자 사이여야 하며 암호는 6자에서 12자 사이여야 합니다. 또한 올바른 이메일 주소가 제공되어야 합니다.";
};
const getFormValidMessage = (): string => {
  return "등록 가능합니다!";
};

const RegisterPageFooter = ({
  handleRegister,
  isFormValid,
}: RegisterFooterProps): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  const handlePushToLoginPage = (): void => {
    navigate("/login");
  };

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Register"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text=""
        redirectText="Already have an account"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToLoginPage}
      />
    </>
  );
};

export default RegisterPageFooter;
