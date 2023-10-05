import Comment from "components/Comments/Comment";
import CommentForm from "components/Comments/CommentForm";
import { IComment } from "models/data";
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
