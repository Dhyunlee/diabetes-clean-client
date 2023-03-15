import api from "utils/axios";

/* 유저 및 인증 */
const logInApi = async <T>(insertData: T) => {
  try {
    const { data } = await api.post("/api/v1/auth/login", insertData, {
      withCredentials: true,
    });
    return data;
  } catch (error: any) {
    throw error.message;
  }
};
const checkemailApi = async <T>(insertData: T) => {
  try {
    const res = await api.post(
      "/api/v1/auth/checkemail",
      { email: insertData },
      { withCredentials: true }
    );
    return res;
  } catch (error: any) {
    throw error.message;
  }
};

const getUserApi = async () => {
  try {
    const { data } = await api.get("/api/v1/users", {
      withCredentials: true,
    });
    return data;
  } catch (error: any) {
    throw error.message;
  }
};
const postUserApi = async <T>(insertData: T) => {
  try {
    const { data } = await api.post("/api/v1/users", insertData, {
      withCredentials: true,
    });
    return data;
  } catch (error: any) {
    throw error.message;
  }
};
const updateUserApi = async () => {};
const deleteUserApi = async () => {};

export {
  logInApi,
  getUserApi,
  postUserApi,
  updateUserApi,
  deleteUserApi,
  checkemailApi,
};
