import { IContentsResponse } from "models/db";
import api from "utils/axios";

const getAllContents = async () => {
  try {
    const { data } = await api.get<IContentsResponse>(`/api/v1/contents`, {
      withCredentials: true,
    });
    return data;
  } catch (error: any) {
    throw error.response;
  }
};

const getUserContents = async (userId: string | null) => {
  try {
    if (!userId) return;
    const { data } = await api.get<IContentsResponse>(`/api/v1/contents/users/${userId}`, {
      withCredentials: true,
    });
    return data;
  } catch (error: any) {
    throw error.response;
  }
};

const createContents = async <T>(insertData: T) => {
  try {
    const { data } = await api.post("/api/v1/contents", insertData, {
      withCredentials: true,
    });
    return data;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
};

export { getAllContents, getUserContents, createContents };
