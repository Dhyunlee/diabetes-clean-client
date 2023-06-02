import ReviewStatus from "./ReviewStatus";
import Comment from "components/Review/Comment";
import CommentForm from "components/Review/CommentForm";
import { Contour } from "components/Feed/styles";
import {useCommentQuery} from "hooks/services/queries/";
import { CommentsContainer, ReviewContainer } from "./styles";

interface IProps {
  postId: string;
}
const Review = ({ postId }: IProps) => {
  const {data} = useCommentQuery(postId);
  const comments = data?.comment;
  const commentLength = data?.comment.length;
  return (
    <ReviewContainer>
      <ReviewStatus commentLength={commentLength}/>
      <Contour />
      {/* 댓글 리스트 */}
      <CommentsContainer>
        <CommentForm contentsId={postId}/>
        {
          comments?.map(comment => (
            <Comment key={comment._id} comment={comment}/>
          ))
        }
      </CommentsContainer>
    </ReviewContainer>
  );
};

export default Review;
