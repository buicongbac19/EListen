import axios from "axios";
import { IUserLoginItem, IUserRegisterItem } from "../types/user";

const HOST_API = import.meta.env.VITE_HOST_API;

export const login = (data: IUserLoginItem) => {
  return axios.post(`${HOST_API}/auth/login`, data);
};
export const registerUser = (data: IUserRegisterItem) => {
  return axios.post(`${HOST_API}/auth/register`, data);
};
