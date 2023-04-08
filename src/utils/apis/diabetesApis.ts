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

export { getDiabetes };
