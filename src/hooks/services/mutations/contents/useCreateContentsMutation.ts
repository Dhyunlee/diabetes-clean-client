import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { CONTENTS_KEY } from "constants/query_key";
import { CommonResponse, IContentsRequest } from "models/db";
import { createContents } from "utils/apis/contents";

const useDelContentsMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<CommonResponse, AxiosError, IContentsRequest>(createContents<IContentsRequest>, {
    onSuccess: () => {
      queryClient.invalidateQueries<string>([CONTENTS_KEY]);
    },
    onError: err => {
      console.log({error: err})
      return err;
    }
  })
}

export default useDelContentsMutation;