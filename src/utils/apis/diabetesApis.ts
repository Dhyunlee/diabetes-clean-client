import axios from "axios";
import { QueryFunctionContext } from "react-query";

const getDiabetes = async (userId: QueryFunctionContext<(string | undefined)[], any>) => {
    try {
      const { data } = await axios.get(`/api/v1/diabetes/users/${userId}`, {
        withCredentials: true,
      });
      return data;
    } catch (error: any) {
      throw error.response;
    }
  };


  export {
    getDiabetes
  }