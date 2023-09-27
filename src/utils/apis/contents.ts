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

const getAllContents = async (page: string) => {
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
//내피드 페이징처리
const getUserContents = async (page: string, context: string) => {
  const limit = 10;
  try {
    const { data } = await api.get<IContentsResponse>(
      `${CONTENTS_API}/users/${context}?page=${page}&size=${limit}`
    );
    console.log(data); /* {isOk: true, contents: []} */
    return data;
  } catch (error: any) {
    alertHandler.onToast({
      msg: error.data.msg || "서버 오류, 관리자에게 문의해주세요!",
      icon: "error"
    });
    throw error.response;
  }
};

const getMyFeedInfo = async (context: string) => {
  try {
    const { data } = await api.get<IContentsResponse>(
      `${CONTENTS_API}/users/${context}/info`
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

const getLikedPosts = async (page: string, context: string) => {
  const limit = 10;
  try {
    //contents/like/users/username?page=1&size=10
    const { data } = await api.get<IContentsResponse>(
      `${CONTENTS_API}/like/users/${context}?page=${page}&size=${limit}`
    );
    //응답 데이터를 contents와 맞추기 위해 가공함.
    if (!data.likedPost.length)
      return {
        isOk: false,
        contents: []
      };
    const contents = data?.likedPost
      .map((item: any) => item.contents)
      .reverse();
    const data_: IContentsResponse = {
      isOk: true,
      contents
    };
    console.log({ data_ });
    return data_;
  } catch (error: any) {
    console.log({ error });
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
  getMyFeedInfo,
  getLikedPosts,
  createContents,
  deleteContents
};
