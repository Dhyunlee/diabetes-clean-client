import axios from "axios";
import useStorage from "utils/functions/useStorage";
// const API_BASE_URL = process.env.REACT_APP_BASE_URL;
const API_BASE_URL = "";
const { getStorage } = useStorage;
console.log({ API_BASE_URL });
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
    throw error;
  }
);

export default api;
