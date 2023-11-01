import { API_PATH } from "constants/api_path";
import { CommonResponse, IDiabetesRequest } from "models/data";
import api from "utils/axios";
import alertHandler from "utils/functions/alertHandler";

const { DIABETES_API } = API_PATH;

const createDiabetes = async <T>(insertData: T) => {
  try {
    const { data } = await api.post<CommonResponse>(
      `${DIABETES_API}`,
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

const deleteDiabetes = async (diabetesId: string) => {
  try {
    const { data } = await api.delete<CommonResponse>(
      `${DIABETES_API}/${diabetesId}`
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

const updateDiabetes = async ({
  diabetesId,
  diabetesData
}: {
  diabetesId: string;
  diabetesData: IDiabetesRequest;
}) => {
  console.log({ diabetesId, diabetesData });
  try {
    const { data } = await api.patch<CommonResponse>(
      `${DIABETES_API}/${diabetesId}`,
      diabetesData
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
    const { data } = await api.get(`${DIABETES_API}/users/${userId}`);
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
    const { data } = await api.get(`${DIABETES_API}/${id}`);
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
