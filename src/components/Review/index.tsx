import ReviewStatus from "./ReviewStatus";
import { useAPIByIdQuery } from "hooks/service/queries";
import { ICommentResponse } from "models/db";
import { COMMENT_KEY } from "constants/query_key";
import { getAllComment } from "utils/apis/comment";
import Comment from "components/Review/Comment";
import CommentForm from "components/Review/CommentForm";

import { Contour } from "styles/common";
import { CommentsContainer, ReviewContainer } from "./styles";

interface IProps {
  postId: string;
}
const Review = ({ postId }: IProps) => {
  const { data } = useAPIByIdQuery<ICommentResponse>(
    postId,
    COMMENT_KEY,
    getAllComment
  );
  const comments = data?.comment;
  const commentLength = data?.comment.length;

  return (
    <ReviewContainer>
      <ReviewStatus commentLength={commentLength} />
      <Contour />
      {/* 댓글 리스트 */}
      <CommentsContainer>
        <CommentForm contentsId={postId} />
        {comments?.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))}
      </CommentsContainer>
    </ReviewContainer>
  );
};

export default Review;
