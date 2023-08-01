import PostStatus from "components/Posts/PostStatus";
import Comment from "components/Comments/Comment";
import CommentForm from "components/Comments/CommentForm";
import { useAPIByIdQuery } from "hooks/service/queries";
import { COMMENT_KEY } from "constants/query_key";
import { getAllComment } from "utils/apis/comment";
import { IComment, ICommentResponse } from "models/db";

import { CommentsContainer } from "./styles";

interface IProps {
  postId: string;
  comments: IComment[];
}
const Comments = ({ postId, comments }: IProps) => {
  return (
    <CommentsContainer>
      <CommentForm contentsId={postId} />
      {comments?.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </CommentsContainer>
  );
};

export default Comments;
