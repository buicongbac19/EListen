import axios from "axios";
import { IUserLoginItem } from "../types/user";

const HOST_API = import.meta.env.VITE_HOST_API;

export const login = (data: IUserLoginItem) => {
  const formData = new FormData();
  formData.append("email", data.email);
  formData.append("password", data.password);
  formData.append("rememberMe", data.remember.toString());

  return axios.post(`${HOST_API}/auth/login`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const registerAdmin = (data: IUserLoginItem) => {
  return axios.post("http://localhost:8000/api/admin/register", data);
};
