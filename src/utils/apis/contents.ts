import { API_PATH } from "constants/api_path";
import { CommonResponse, IContentsResponse } from "models/db";
import api from "utils/axios";

const { CONTENTS_API } = API_PATH;

const getAllContents = async () => {
  try {
    const { data } = await api.get<IContentsResponse>(`${CONTENTS_API}`, {
      withCredentials: true,
    });
    return data;
  } catch (error: any) {
    throw error.response;
  }
};
const getUserContents = async (nickname: string | null) => {
  try {
    if (!nickname) return;
    const { data } = await api.get<IContentsResponse>(
      `${CONTENTS_API}/users/${nickname}`,
      {
        withCredentials: true,
      }
    );
    return data;
  } catch (error: any) {
    throw error.response;
  }
};

const createContents = async <T>(insertData: T) => {
  try {
    const { data } = await api.post<CommonResponse>(`${CONTENTS_API}`, insertData, {
      withCredentials: true,
    });
    return data;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
};

const deleteContents = async (contentId: string) => {
  try {
    const { data } = await api.delete<CommonResponse>(
      `${CONTENTS_API}/${contentId}`,
      {
        withCredentials: true,
      }
    );
    console.log({res: data})
    return data;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
};

export { getAllContents, getUserContents, createContents, deleteContents };
