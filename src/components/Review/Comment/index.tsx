import ContentsInfo from "components/Base/ContentsInfo";
import { CommentContainer, CommentContents, CommentHeader } from "./styles";
import { IComment } from "models/db";

interface Iprops {
  comment: IComment;
}

const Comment = ({comment}: Iprops) => {
  const {content, createdAt, writer} = comment;
  return (
    <CommentContainer>
      <CommentHeader>
        <ContentsInfo
          createdAt={createdAt}
          imgUrl={writer.imageSrc}
          imgSize={40}
          userName={writer.nickname}
          link={"/story/sugarclean119"}
        />
      </CommentHeader>
      <CommentContents>
        <p>{content}</p>
      </CommentContents>
    </CommentContainer>
  );
};

export default Comment;
