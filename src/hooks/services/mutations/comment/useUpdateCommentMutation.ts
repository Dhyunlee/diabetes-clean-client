//PATCH api/v1/comment/:id

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { COMMENT_KEY } from 'constants/query_key';
import { CommonResponse } from 'models/db';
import { updateComment } from 'utils/apis/comment';
import alertHandler from 'utils/functions/alertHandler';

const useUpdateCommentMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<CommonResponse, AxiosError, {content: string, commentId: string} >(updateComment, {
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