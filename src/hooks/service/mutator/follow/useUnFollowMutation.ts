import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { CONTENTS_KEY, FOLLOW_KEY, USER_KEY } from "constants/query_key";
import { CommonResponse } from "models/data";
import { unFollow } from "utils/apis/follow";
import alertHandler from "utils/functions/alertHandler";

const useUnFollowMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<CommonResponse, AxiosError, string>(unFollow, {
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

export default useUnFollowMutation;
