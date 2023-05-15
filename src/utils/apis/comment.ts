import { IContentsResponse } from "models/db";
import api from "utils/axios";

const getAllComment = async () => {
  try {
    const { data } = await api.get<IContentsResponse>(`/api/v1/contents`, {
      withCredentials: true,
    });
    return data;
  } catch (error: any) {
    throw error.response;
  }
};


export {getAllComment}