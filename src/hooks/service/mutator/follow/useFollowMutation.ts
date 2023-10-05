import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { FOLLOW_KEY } from "constants/query_key";
import { CommonResponse } from "models/db";
import { follow } from "utils/apis/follow";
import alertHandler from "utils/functions/alertHandler";

const useFollowMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<CommonResponse, AxiosError, string>(follow, {
    onSuccess: (data) => {
      queryClient.invalidateQueries<string>([FOLLOW_KEY]);
      alertHandler.onToast({ msg: data.msg });
    },
    onError: (err) => {
      console.log({ error: err });
      return err;
    }
  });
};

export default useFollowMutation;
