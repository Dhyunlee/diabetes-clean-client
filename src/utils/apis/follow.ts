import { API_PATH } from "constants/api_path";
import api from "utils/axios";

//patch api/v1/users/:id/follow
const { USER_API } = API_PATH;

const follow = async (userId: string) => {
  if (!userId) return;
  try {
    const { data } = await api.patch(`${USER_API}/${userId}/follow`);
    return data;
  } catch (error: any) {
    console.error(error);
    throw error;
  }
};

// patch api/v1/users/:id/unfollow
const unFollow = async (userId: string | null) => {
  if (!userId) return;
  try {
    const { data } = await api.patch(`${USER_API}/${userId}/unfollow`);
    return data;
  } catch (error: any) {
    console.error(error);
    throw error;
  }
};
const getFollow = async (userId: string | null) => {
  if (!userId) return;
  try {
    const { data } = await api.get(`${USER_API}/${userId}/follow`);
    return data;
  } catch (error: any) {
    console.error(error);
    throw error;
  }
};

export { follow, unFollow, getFollow };
