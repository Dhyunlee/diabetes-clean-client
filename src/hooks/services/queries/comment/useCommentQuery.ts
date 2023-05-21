import { useQuery } from "@tanstack/react-query";
import { COMMENT_KEY } from "constants/query_key";
import { getAllComment } from "utils/apis/comment";

const useCommentQuery = (contentsId: string) => {
   return useQuery({
      queryKey: [COMMENT_KEY, contentsId],
      queryFn: () => getAllComment(contentsId),
      enabled: !!contentsId,
    });
};

export default useCommentQuery;
