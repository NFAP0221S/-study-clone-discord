import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";

const LoginPageFooter = (props: { handleLogin: any; isFormValid: any }) => {
  const { handleLogin, isFormValid } = props;
  return (
    <div>
      <CustomPrimaryButton
        label="Log-in"
        additionalStyles={{ marginTop: "30px" }}
        disabled={!isFormValid}
        onClick={handleLogin}
      />
    </div>
  );
};

export default LoginPageFooter;
