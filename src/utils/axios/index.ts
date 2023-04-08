import axios from "axios";
import useStorage from "utils/functions/useStorage";
const API_BASE_URL = process.env.REACT_APP_BASE_URL;
const { getStorage, removeStorage, setStorage } = useStorage;

const api = axios.create({
  baseURL: API_BASE_URL || "http://localhost:5000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    const token = getStorage("accessToken");
    if (!token) {
      return {
        ...config,
        headers: {
          ...config.headers,
          Authorization: null,
        },
      };
    }
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      },
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
    const { config, response } = error;
    if (response.status === 401) {
      return error.response;
    } else if (response.status === 403) {
      console.log("토큰 만료되어 reflesh 하기");
      // removeStorage("accessToken");
      try {
        const {data} = await api.post<{isOk: boolean, accessToken: string}>("/api/v1/auth/reflesh", {
          userId: '634ed1b8fb68dffc1428248f'
        });
        const token = data.accessToken;
        setStorage('accessToken', token);
        config.headers.Authorization = `Bearer ${token}`; //토큰 재요청
      } catch(error) {
        // 리플레시 토큰 유효하지 않으면 로그아웃시키기.
        removeStorage('accessToken');
      }
      throw error.response;
    }
    throw error.response;
  }
);

export default api;
