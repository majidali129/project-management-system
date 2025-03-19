import { AllUsers, Session, SignIn, SignUp, User } from "@/types";
import { api, ApiResponse } from "./api";

export const registerUser = async (data: SignUp): Promise<ApiResponse<User>> => {
  return api.post<User, SignUp>("/users/", data);
};

export const loginUser = async (data: SignIn): Promise<ApiResponse<Session>> => {
  return api.post<Session, SignIn>("/users/login", data);
};

export const getSession = async (): Promise<ApiResponse<Session>> => {
  return api.get<Session>("/users/session");
};

export const getUserProfile = async (userId: string): Promise<ApiResponse<User>> => {
  return api.get<User>(`/users/${userId}/profile`);
};

export const getAllUsers = async (): Promise<ApiResponse<AllUsers[]>> => {
  return api.get<AllUsers[]>("/users");
};

export const logoutUser = async (): Promise<ApiResponse<null>> => {
  return api.get("/users/logout");
};
export const verifyEmail = async (verifyToken: number) => {
  const response = await api.get(`/users/verify-email/:verificationToken=${verifyToken}`);
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
