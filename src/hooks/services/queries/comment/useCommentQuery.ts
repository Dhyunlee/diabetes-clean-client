import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { COMMENT_KEY } from "constants/query_key";
import { ICommentResponse } from "models/db";
import { getAllComment } from "utils/apis/comment";

const useCommentQuery = (contentsId: string) => {
  return useQuery<ICommentResponse | undefined, AxiosError>({
    queryKey: [COMMENT_KEY, contentsId],
    queryFn: () => getAllComment(contentsId),
    enabled: !!contentsId
  });
};

export default useCommentQuery;
