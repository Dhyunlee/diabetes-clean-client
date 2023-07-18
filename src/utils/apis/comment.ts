import { API_PATH } from "constants/api_path";
import { CommonResponse, ICommentResponse } from "models/db";
import api from "utils/axios";
import alertHandler from "utils/functions/alertHandler";

const { COMMENT_API } = API_PATH;

const getAllComment = async (contentsId: string | null) => {
  try {
    if (!contentsId) return;
    const { data } = await api.get<ICommentResponse>(
      `${COMMENT_API}/contents/${contentsId}`,
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

const createComment = async <T>(insertData: T) => {
  try {
    const { data } = await api.post<CommonResponse>(
      `${COMMENT_API}`,
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

const updateComment = async ({
  content,
  commentId
}: {
  content: string;
  commentId: string;
}) => {
  console.log({ commentId, content });
  try {
    const { data } = await api.patch<CommonResponse>(
      `${COMMENT_API}/${commentId}`,
      { content },
      {
        withCredentials: true
      }
    );
    console.log({ predata: data });
    return data;
  } catch (error: any) {
    alertHandler.onToast({
      msg: error.data.msg || "서버 오류, 관리자에게 문의해주세요!",
      icon: "error"
    });
    throw error;
  }
};

const deleteComment = async (commentId: string) => {
  try {
    const { data } = await api.delete<CommonResponse>(
      `${COMMENT_API}/${commentId}`,
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

export { getAllComment, createComment, updateComment, deleteComment };
