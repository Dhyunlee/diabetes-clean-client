import api from "utils/axios";
import useStorage from "utils/functions/useStorage";
import {
  CommonResponse,
  IAuthResponse,
  IUserResponse,
  TWriterInfo
} from "models/data";
import { API_PATH } from "constants/api_path";
import alertHandler from "utils/functions/alertHandler";

/* 유저 및 인증 */
const { AUTH, USER_API, CHECK_MEAIL, LOG_IN } = API_PATH;

const logInApi = async <T>(insertData: T) => {
  try {
    const { data } = await api.post<IAuthResponse>(`${LOG_IN}`, insertData);
    return data;
  } catch (error: any) {
    console.log({ error });
    alertHandler.onToast({ msg: "서버 오류, 잠시후 다시 시도해주세요!" });
    throw error;
  }
};
const checkemailApi = async <T>(insertData: T) => {
  try {
    const { data } = await api.post<CommonResponse>(`${CHECK_MEAIL}`, {
      email: insertData
    });
    return data;
  } catch (error: any) {
    alertHandler.onToast({
      msg: error.data.msg || "서버 오류, 관리자에게 문의해주세요!",
      icon: "error"
    });
    throw error;
  }
};

const postUserApi = async <T>(insertData: T) => {
  try {
    const { data } = await api.post(`${USER_API}`, insertData);
    return data;
  } catch (error: any) {
    console.error(error);
    throw error;
  }
};

const updateUserApi = async ({
  userData,
  userId
}: {
  userData: TWriterInfo;
  userId: string;
}) => {
  try {
    const { data } = await api.patch(`${USER_API}/${userId}`, userData);
    return data;
  } catch (error: any) {
    console.error(error);
    throw error;
  }
};
const deleteUserApi = async (userId: string) => {
  try {
    const { data } = await api.delete<CommonResponse>(`${USER_API}/${userId}`);
    return data;
  } catch (error: any) {
    console.error(error);
    throw error;
  }
};

const getUserFindById = async (userId: string) => {
  try {
    const { data } = await api.get<IUserResponse>(`${USER_API}/${userId}`);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getUserIdByToken = async () => {
  const { removeStorage } = useStorage;
  try {
    const { data } = await api.get<IUserResponse>(`${AUTH}`);
    return data;
  } catch (error: any) {
    if (error.status === 403) {
      console.log("403");
      window.location.href = "/login";
      removeStorage("accessToken");
    }
    throw error;
  }
};

export {
  logInApi,
  getUserIdByToken,
  postUserApi,
  updateUserApi,
  deleteUserApi,
  getUserFindById,
  checkemailApi
};
