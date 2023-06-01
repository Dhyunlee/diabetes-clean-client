import { CommonResponse, ICommentResponse } from "models/db";
import api from "utils/axios";

const getAllComment = async (contentsId: string | null) => {
  try {
    if (!contentsId) return;
    const { data } = await api.get<ICommentResponse>(
      `/api/v1/comment/contents/${contentsId}`,
      {
        withCredentials: true,
      }
    );
    return data;
  } catch (error: any) {
    throw error.response;
  }
};

const createComment = async <T>(insertData: T) => {
  try {
    const { data } = await api.post<CommonResponse>(
      "/api/v1/comment",
      insertData,
      {
        withCredentials: true,
      }
    );
    return data;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
};

const updateComment = async ({content, commentId}: {content: string, commentId: string}) => {
  console.log({commentId, content})
  try {
    const { data } = await api.patch<CommonResponse>(
      `/api/v1/comment/${commentId}`,
      {content},
      {
        withCredentials: true,
      }
    );
    console.log({predata: data})
    return data;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
};

const deleteComment = async (commentId: string) => {
  try {
    const { data } = await api.delete<CommonResponse>(
      `/api/v1/comment/${commentId}`,
      {
        withCredentials: true,
      }
    );
    return data;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
};

export { getAllComment, createComment, updateComment, deleteComment };
