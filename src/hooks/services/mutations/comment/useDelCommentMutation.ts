import { useMutation, useQueryClient } from '@tanstack/react-query';
import { COMMENT_KEY } from 'constants/query_key';
import { deleteComment } from 'utils/apis/comment';
import alertHandler from 'utils/functions/alertHandler';

const useDelCommentMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteComment, {
    onSuccess: (data) => {
      if(data.isOk) {
        alertHandler.onToast({ msg: data.msg });
      }
      queryClient.invalidateQueries<string>([COMMENT_KEY]);
    },
    onError: err => {
      console.log({error: err})
      return err;
    }
  })
}

export default useDelCommentMutation;