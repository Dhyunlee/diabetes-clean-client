import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { CommonResponse, IDiabetesRequest } from "models/db";
import { createDiabetes } from "utils/apis/diabetesApis";
import { DIABETES_KEY } from "constants/query_key";
import alertHandler from "utils/functions/alertHandler";

const useCreateDiabetes = () => {
  const queryClient = useQueryClient();
  return useMutation<CommonResponse, AxiosError, IDiabetesRequest>(
    createDiabetes<IDiabetesRequest>,
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries<string>([DIABETES_KEY]);
        alertHandler.onToast({ msg: data.msg });
      },
      onError: (err) => {
        console.log({ error: err });
        return err;
      }
    }
  );
};

export default useCreateDiabetes;
