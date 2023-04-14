import { IDiabetesResponse } from "models/db";
import api from "utils/axios";

const getDiabetes = async (userId: string | null) => {
  try {
    if(!userId) return;
    const { data } = await api.get(`/api/v1/diabetes/users/${userId}`, {
      withCredentials: true,
    });
    return data;
  } catch (error: any) {
    throw error.response;
  }
};

const createDiabetes = async <T>(insertData: T) => {
  try {
    const { data } = await api.post<IDiabetesResponse>("/api/v1/diabetes", insertData, {
      withCredentials: true,
    });
    return data;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
};

export { getDiabetes, createDiabetes };
