import { API_PATH } from "constants/api_path";
import { CommonResponse, ILikeRequest, ILikeResponse } from "models/db";
import api from "utils/axios";
import alertHandler from "utils/functions/alertHandler";

const { LIKE_API } = API_PATH;

const addLike = async (insertData: ILikeRequest) => {
  try {
    const { data } = await api.post<CommonResponse>(`${LIKE_API}`, insertData);
    return data;
  } catch (error: any) {
    alertHandler.onToast({
      msg: error.data.msg || "서버 오류, 관리자에게 문의해주세요!",
      icon: "error"
    });
    throw error;
  }
};
const unLike = async (insertData: ILikeRequest) => {
  const { userId, ...context } = insertData;
  try {
    const { data } = await api.post<CommonResponse>(
      `${LIKE_API}/contents/users/${userId}`,
      context
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
// /like/contents/contentsId
const getContentsLike = async (contentsId: string | null) => {
  try {
    if (!contentsId) return;
    const { data } = await api.get<ILikeResponse>(
      `${LIKE_API}/contents/${contentsId}`
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
// /like/users/6491db12d62b2e1abd051b97
const getMyContentsLike = async (userId: string | null) => {
  try {
    if (!userId) return;
    const { data } = await api.get<ILikeResponse>(
      `${LIKE_API}/users/${userId}`
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

export { addLike, unLike, getContentsLike, getMyContentsLike };
