import api from "utils/axios";

/* 유저 및 인증 */
const logInApi = async <T>(insertData: T) => {
  try {
    const { data } = await api.post("/api/v1/auth/login", insertData, {
      withCredentials: true,
    });
    return data;
  } catch (error: any) {
    console.log(error);
    throw error.response;
  }
};
const checkemailApi = async <T>(insertData: T) => {
  try {
    const { data } = await api.post(
      "/api/v1/auth/checkemail",
      { email: insertData },
      { withCredentials: true }
    );
    return data;
  } catch (error: any) {
    throw error.response;
  }
};

const getUserApi = async () => {
  try {
    const { data } = await api.get("/api/v1/users", {
      withCredentials: true,
    });
    console.log(data)
    return data;
  } catch (error: any) {
    console.log(error.response);
    throw error
  }
};
const postUserApi = async <T>(insertData: T) => {
  try {
    const { data } = await api.post("/api/v1/users", insertData, {
      withCredentials: true,
    });
    return data;
  } catch (error: any) {
    throw error.response;
  }
};

const updateUserApi = async () => {};
const deleteUserApi = async () => {};

export { logInApi, getUserApi, postUserApi, updateUserApi, deleteUserApi, checkemailApi };
