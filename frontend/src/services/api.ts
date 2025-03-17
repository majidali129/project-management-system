import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const apiConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.SERVER_BASE_URL || "http://localhost:8000/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
};

const axiosInstance: AxiosInstance = axios.create(apiConfig);

export interface ApiResponse<T> {
  data: T;
  statusCode: number;
  message: string;
  success: boolean;
}

axiosInstance.interceptors.response.use(
  (response) => {
    console.log(`Api Response:: `, response);
    return response;
  },
  (error) => {
    console.log(`Api Error:: ${error}`);
    return Promise.reject(error);
  }
);

export const api = {
  get: async <T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    try {
      const response: AxiosResponse<ApiResponse<T>> = await axiosInstance.get(url, config);
      return response.data;
    } catch (error) {
      throw handleApiError<T>(error);
    }
  },

  post: async <T, U>(url: string, data: U, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    try {
      const response: AxiosResponse<ApiResponse<T>> = await axiosInstance.post(url, data, config);
      return response.data;
    } catch (error) {
      throw handleApiError<T>(error);
    }
  },

  put: async <T, U>(url: string, data: U, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    try {
      const response: AxiosResponse<ApiResponse<T>> = await axiosInstance.put(url, data, config);
      return response.data;
    } catch (error) {
      throw handleApiError<T>(error);
    }
  },
  patch: async <T, U>(url: string, data: U, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    try {
      const response: AxiosResponse<ApiResponse<T>> = await axiosInstance.patch(url, data, config);
      return response.data;
    } catch (error) {
      throw handleApiError<T>(error);
    }
  },

  delete: async <T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    try {
      const response: AxiosResponse<ApiResponse<T>> = await axiosInstance.delete(url, config);
      return response.data;
    } catch (error) {
      throw handleApiError<T>(error);
    }
  },
};

export const handleApiError = <T>(error: unknown) => {
  console.log("Api Call Error:: 🎆", error);
  if (axios.isAxiosError(error)) {
    return { success: false, statusCode: error.response?.status || 500, message: error.response?.data?.message || error.message || "An error occurred", data: null as T };
  } else {
    return {
      success: false,
      statusCode: 500,
      message: error instanceof Error ? error.message : "An unexpected error occured",
      data: null as T,
    };
  }
};
