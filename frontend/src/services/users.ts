import { IUser, IUserLogin } from "@/types";
import { api } from "./api";

export const registerUser = async (data: Omit<IUser, "id">) => {
  const response = await api.post("/users/sign-up", data);
  return response.data;
};
export const verifyEmail = async (verifyToken: number) => {
  const response = await api.get(`/users/verify-email/:verificationToken=${verifyToken}`);
  return response.data;
};

export const loginUser = async (data: IUserLogin) => {
  const response = await api.post("/users/login", data);
  return response.data;
};

export const forgotPassword = async (email: string) => {
  const response = await api.post("/users/update-password", email);
  return response.data;
};

export const resetPassword = async (token: string, newPassword: string) => {
  const response = await api.post(`/users/reset-password/:resetToken=${token}`, { newPassword });
  return response.data;
};
export const updatePassword = async (oldPassword: string, newPassword: string) => {
  const response = await api.patch("/users/update-password", { oldPassword, newPassword });
  return response.data;
};

export const getAllUsers = async () => {
  const response = await api.get("/users");
  return response.data;
};

export const getUser = async (userId: string) => {
  const response = await api.get(`/users/${userId}`);
  return response.data;
};

export const getUserProfile = async (userId: string) => {
  const response = await api.get(`/users/${userId}/profile`);
  return response.data;
};

export const logout = async () => {
  const response = await api.get("/users/logout");
  return response.data;
};
