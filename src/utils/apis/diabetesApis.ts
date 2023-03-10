import { QueryFunctionContext } from "react-query";
import api from "utils/axios";

const getDiabetes = async (userId: QueryFunctionContext<(string | undefined)[], any>) => {
  try {
    const { data } = await api.get(`/api/v1/diabetes/users/${userId}`, {
      withCredentials: true,
    });
    return data;
  } catch (error: any) {
    throw error.response;
  }
};

export { getDiabetes };
