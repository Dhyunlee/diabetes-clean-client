import { ICommentResponse } from "models/db";
import api from "utils/axios";

const getAllComment = async (contentsId: string | null) => {
  try {
    if(!contentsId) return;
    const { data } = await api.get<ICommentResponse>(`/api/v1/comment/contents/${contentsId}`, {
      withCredentials: true,
    });
    return data;
  } catch (error: any) {
    throw error.response;
  }
};


export {getAllComment}