import { API_PATH } from "constants/api_path";
import { CommonResponse, IDiabetesResponse } from "models/db";
import api from "utils/axios";
import alertHandler from "utils/functions/alertHandler";

const { DIABETES_API } = API_PATH;

const createDiabetes = async <T>(insertData: T) => {
  try {
    const { data } = await api.post<CommonResponse>(
      `${DIABETES_API}`,
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

const deleteDiabetes = async (diabetesId: string) => {
  try {
    const { data } = await api.delete<CommonResponse>(
      `${DIABETES_API}/${diabetesId}`,
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

const updateDiabetes = async <T>(diabetesId: string, insertData: T) => {
  try {
    const { data } = await api.patch<IDiabetesResponse>(
      `${DIABETES_API}/${diabetesId}`,
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

const getDiabetes = async (userId: string | null) => {
  try {
    if (!userId) return;
    const { data } = await api.get(`${DIABETES_API}/users/${userId}`, {
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

const getDiabetesFindById = async (id: string | null) => {
  try {
    if (!id) return;
    const { data } = await api.get(`${DIABETES_API}/${id}`, {
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

export {
  getDiabetes,
  getDiabetesFindById,
  createDiabetes,
  deleteDiabetes,
  updateDiabetes
};
