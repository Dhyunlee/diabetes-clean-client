import Comment from "components/Review/Comment";
import WriteComment from "components/Review/WriteComment";
import ReviewStatus from "./ReviewStatus";
import { CommentsContainer, ReviewContainer } from "./styles";


const Review = () => {
  return (
    <ReviewContainer>
      <ReviewStatus />
      {/* 댓글 리스트 */}
      <CommentsContainer>
        <WriteComment />
        <Comment />
      </CommentsContainer>
    </ReviewContainer>
  );
};

export default Review;
