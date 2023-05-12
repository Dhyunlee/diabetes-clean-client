import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CONTENTS_KEY } from "constants/query_key";
import { deleteContents } from "utils/apis/contents";
import alertHandler from "utils/functions/alertHandler";

const useDelContentsMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteContents, {
    onSuccess: (data, variables, context) => {
      console.log({data, variables, context})
      if(data.isOk) {
        alertHandler.onToast({ msg: data.msg });
      }
      queryClient.invalidateQueries<string>([CONTENTS_KEY]);
    },
    onError: err => {
      console.log({error: err})
      return err;
    }
  })
}

export default useDelContentsMutation;