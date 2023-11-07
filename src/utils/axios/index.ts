import axios, { AxiosResponse } from "axios";
import useStorage from "utils/functions/useStorage";
import alertHandler from "utils/functions/alertHandler";
// const API_BASE_URL = process.env.REACT_APP_BASE_URL;
const API_BASE_URL = "";
const { getStorage } = useStorage;
console.log({ API_BASE_URL });

export interface ResponseErrorType {
  code: string;
  message: string;
  response: AxiosResponse;
  status: number;
}

const api = axios.create({
  baseURL: API_BASE_URL || "http://localhost:5000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json"
  }
});

api.interceptors.request.use(
  async (config) => {
    const token = getStorage("accessToken");
    if (!token) {
      return {
        ...config,
        headers: {
          ...config.headers,
          Authorization: null
        }
      };
    }
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${token}`
      }
    };
  },
  async (error: any) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  async (config) => {
    return config;
  },
  async (error) => {
    // 500 에러 이외의 예기치 않는 에러(ex: 서버 다운)
    if (error.code === "ERR_NETWORK") {
      alertHandler.onToast({
        msg: "서버 오류, 관리자에게 문의해주세요!",
        icon: "error"
      });
      throw error;
    }
  }
);

export default api;
