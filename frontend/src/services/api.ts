import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const apiConfig: AxiosRequestConfig = {
  baseURL: process.env.SERVER_BASE_URL || "http://localhost:3000/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
};

const axiosInstance: AxiosInstance = axios.create(apiConfig);

export interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
}

axiosInstance.interceptors.response.use(
  (response) => {
    console.log(`Response:: `, response);
    return response;
  },
  (error) => {
    console.log(`Error:: ${error}`);
    return Promise.reject(error);
  }
);

export const api = {
  get: async <T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    try {
      const response: ApiResponse<T> = await axiosInstance.get(url, config);
      return {
        data: response.data,
        status: response.status,
        statusText: response.statusText,
      };
    } catch (error) {
      throw handleApiError(error);
    }
  },

  post: async <T, U>(url: string, data: U, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    try {
      const response: ApiResponse<T> = await axiosInstance.post(url, data, config);
      return {
        data: response.data,
        status: response.status,
        statusText: response.statusText,
      };
    } catch (error) {
      throw handleApiError(error);
    }
  },

  put: async <T, U>(url: string, data: U, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    try {
      const response: AxiosResponse<T> = await axiosInstance.put(url, data, config);
      return {
        data: response.data,
        status: response.status,
        statusText: response.statusText,
      };
    } catch (error) {
      throw handleApiError(error);
    }
  },
  patch: async <T, U>(url: string, data: U, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    try {
      const response: AxiosResponse<T> = await axiosInstance.patch(url, data, config);
      return {
        data: response.data,
        status: response.status,
        statusText: response.statusText,
      };
    } catch (error) {
      throw handleApiError(error);
    }
  },

  delete: async <T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    try {
      const response: ApiResponse<T> = await axiosInstance.delete(url, config);
      return {
        data: response.data,
        status: response.status,
        statusText: response.statusText,
      };
    } catch (error) {
      throw handleApiError(error);
    }
  },
};

export const handleApiError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    return new Error(error.response?.data.message || error.message);
  }
  return new Error("An unexpected error occured");
};
