import axios from "axios";
import { getCookie } from "utils/apis/cookie";
const API_BASE_URL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL || "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config: any) => {
  const token = getCookie("token");

  return {
    ...config,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
});

export default api;
