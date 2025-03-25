export type IUserLoginItem = {
  email: string;
  password: string;
  remember: boolean;
};

export type IUserRegisterItem = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};
