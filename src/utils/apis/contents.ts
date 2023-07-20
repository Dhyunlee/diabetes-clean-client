import { API_PATH } from "constants/api_path";
import { CommonResponse, IContentsResponse } from "models/db";
import api from "utils/axios";
import alertHandler from "utils/functions/alertHandler";

const { CONTENTS_API } = API_PATH;

const createContents = async <T>(insertData: T) => {
  try {
    const { data } = await api.post<CommonResponse>(
      `${CONTENTS_API}`,
      insertData,
      {
        withCredentials: true
      }
    );
    return data;
  } catch (error: any) {
    alertHandler.onToast({
      msg: error.data.msg || "서버 오류, 관리자에게 문의해주세요!",
      icon: "error"
    });
    throw error;
  }
};

const deleteContents = async (contentId: string) => {
  try {
    const { data } = await api.delete<CommonResponse>(
      `${CONTENTS_API}/${contentId}`,
      {
        withCredentials: true
      }
    );
    console.log({ res: data });
    return data;
  } catch (error: any) {
    alertHandler.onToast({
      msg: error.data.msg || "서버 오류, 관리자에게 문의해주세요!",
      icon: "error"
    });
    throw error;
  }
};

const getAllContents = async () => {
  try {
    const { data } = await api.get<IContentsResponse>(`${CONTENTS_API}`, {
      withCredentials: true
    });
    return data;
  } catch (error: any) {
    alertHandler.onToast({
      msg: error.data.msg || "서버 오류, 관리자에게 문의해주세요!",
      icon: "error"
    });
    throw error.response;
  }
};
const getUserContents = async (nickname: string | null) => {
  if (!nickname) return;
  try {
    const { data } = await api.get<IContentsResponse>(
      `${CONTENTS_API}/users/${nickname}`,
      {
        withCredentials: true
      }
    );
    return data;
  } catch (error: any) {
    alertHandler.onToast({
      msg: error.data.msg || "서버 오류, 관리자에게 문의해주세요!",
      icon: "error"
    });
    throw error.response;
  }
};

export { getAllContents, getUserContents, createContents, deleteContents };
