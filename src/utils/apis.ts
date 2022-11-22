import axios from "axios";

/* 유저 및 인증 */
const logInApi = async <T>(insertData: T) => {
  try {
    const { data } = await axios.post("/api/v1/auth/login", insertData, {
      withCredentials: true,
    });
    return data;
  } catch (error: any) {
    throw error.response;
  }
};
const logOutApi = async () => {};
const userStateApi = async () => {};
const getUserApi = async () => {};
const postUserApi = async <T>(insertData: T) => {
  try {
    const { data } = await axios.post("/api/v1/users", insertData, {
      withCredentials: true,
    });
    return data;
  } catch (error: any) {
    throw error.response;
  }
};
const updateUserApi = async () => {};
const deleteUserApi = async () => {};
const checkemailApi = async <T>(insertData: T) => {
  try {
    const res = await axios.post(
      "/api/v1/auth/checkemail",
      { email: insertData },
      { withCredentials: true }
    );
    return res;
  } catch (error: any) {
    throw error;
  }
};

export {
  logInApi,
  logOutApi,
  userStateApi,
  getUserApi,
  postUserApi,
  updateUserApi,
  deleteUserApi,
  checkemailApi,
};
