import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CONTENTS_KEY } from "constants/query_key";
import { IContentsRequest } from "models/db";
import { createContents } from "utils/apis/contents";

const useDelContentsMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(createContents<IContentsRequest>, {
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