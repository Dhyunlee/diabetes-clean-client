import axios from "axios";
const API_BASE_URL = process.env.REACT_APP_BASE_URL;

const accessToken = false;
const api = axios.create({
  baseURL: API_BASE_URL || "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config: any) => {
//   const accessToken = token.getToken("token");

  return {
    ...config,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
});

export default api;
