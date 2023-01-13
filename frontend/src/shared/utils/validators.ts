interface IloginForm {
  mail: string;
  password: string;
}

export const validateLoginForm = ({ mail, password }: IloginForm): boolean => {
  const isMailValid = validateMail(mail);
  const isPasswordValid = validatePassword(password);

  return isMailValid && isPasswordValid;
};

const validatePassword = (password: string): boolean => {
  return password.length > 6 && password.length < 12;
};

const validateMail = (mail: string): boolean => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(mail);
};
// const validatePassword
