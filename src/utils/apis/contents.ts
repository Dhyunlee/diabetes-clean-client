import { API_PATH } from "constants/api_path";
import { CommonResponse, IContentsResponse, ILikeResponse } from "models/db";
import api from "utils/axios";
import alertHandler from "utils/functions/alertHandler";

const { CONTENTS_API } = API_PATH;

const createContents = async <T>(insertData: T) => {
  try {
    const { data } = await api.post<CommonResponse>(
      `${CONTENTS_API}`,
      insertData
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
  console.log(contentId);
  try {
    const { data } = await api.delete<CommonResponse>(
      `${CONTENTS_API}/${contentId}`
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

const getAllContents = async (page: number) => {
  const limit = 10;
  try {
    //contents?page=1&size=10
    const { data } = await api.get<IContentsResponse>(
      `${CONTENTS_API}?page=${page}&size=${limit}`
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
const getUserContents = async (nickname: string | null) => {
  if (!nickname) return;
  try {
    const { data } = await api.get<IContentsResponse>(
      `${CONTENTS_API}/users/${nickname}`
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

const getLikedPosts = async (username: string | null) => {
  try {
    //contents/like/users/6491db12d62b2e1abd051b97
    const { data } = await api.get<ILikeResponse>(
      `${CONTENTS_API}/like/users/${username}`
    );
    const contents = data.like.map((likedPost) => {
      return likedPost.contents;
    });
    return contents;
  } catch (error: any) {
    alertHandler.onToast({
      msg: error.data.msg || "서버 오류, 관리자에게 문의해주세요!",
      icon: "error"
    });
    throw error.response;
  }
};

export {
  getAllContents,
  getUserContents,
  getLikedPosts,
  createContents,
  deleteContents
};
