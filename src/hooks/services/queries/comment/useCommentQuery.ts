import { useQuery } from "@tanstack/react-query";
import { COMMENT_KEY } from "constants/query_key";
import { IContentsResponse } from "models/db";
import { getAllComment } from "utils/apis/comment";

const useCommentQuery = () => {
  return useQuery<IContentsResponse>({
    queryKey: [COMMENT_KEY],
    queryFn: () => getAllComment(),
  });
};

export default useCommentQuery;
