import { useMutation, useQueryClient } from '@tanstack/react-query';
import { COMMENT_KEY } from 'constants/query_key';
import { ICommentRequest } from 'models/db';
import { createComment } from 'utils/apis/comment';

const useCreateCommentMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(createComment<ICommentRequest>, {
    onSuccess: () => {
      queryClient.invalidateQueries<string>([COMMENT_KEY]);
    },
    onError: err => {
      console.log({error: err})
      return err;
    }
  })
}

export default useCreateCommentMutation;