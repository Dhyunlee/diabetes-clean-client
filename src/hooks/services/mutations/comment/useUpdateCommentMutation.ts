//PATCH api/v1/comment/:id

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { COMMENT_KEY } from 'constants/query_key';
import { updateComment } from 'utils/apis/comment';
import alertHandler from 'utils/functions/alertHandler';

const useUpdateCommentMutation = (onClose?: () => void) => {
  const queryClient = useQueryClient();
  return useMutation(updateComment, {
    onSuccess: (data) => {
      if(data.isOk) {
        queryClient.invalidateQueries<string>([COMMENT_KEY]);
        alertHandler.onToast({ msg: data.msg });
      }
    },
    onError: err => {
      console.log({error: err})
      return err;
    }
  })
}

export default useUpdateCommentMutation;