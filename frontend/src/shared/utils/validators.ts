interface LoginForm {
  mail: string;
  password: string;
}
interface RegisterForm {
  mail: string;
  password: string;
  username: string;
}

// 로그인 폼
export const validateLoginForm = ({ mail, password }: LoginForm): boolean => {
  // const isMailValid = validateMail(mail);
  // const isPasswordValid = validatePassword(password);

  // return isMailValid && isPasswordValid;
  return validateMail(mail) && validatePassword(password);
};

// 등록(회원가입) 폼
export const validateRegisterForm = ({
  mail,
  password,
  username,
}: RegisterForm): boolean => {
  // const isMailValid = validateMail(mail);
  // const isPasswordValid = validatePassword(password);
  // const isUsernameValid = validateUsername(username);

  // return isMailValid && isPasswordValid && isUsernameValid;
  return (
    validateMail(mail) &&
    validatePassword(password) &&
    validateUsername(username)
  );
};

const validatePassword = (password: string): boolean => {
  return password.length > 6 && password.length < 13;
};

export const validateMail = (mail: string): boolean => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(mail);
};

const validateUsername = (username: string): boolean => {
  return username.length > 2 && username.length < 13;
};
