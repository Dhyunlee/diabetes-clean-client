import { memo } from "react";
import Review from "components/Review";
import { Contour } from "../styles";
import {
  PostCardWrap,
  PostBody,
  PostBodyBlock,
  ReviewBlock,
} from "../PostCards/styles";
import PostHeader from "../PostHeader";
interface IProps {
  id: number;
  writer: {
    userName: string;
    imgUrl: string;
  };
  imgUrl: string;
  imgName: string;
  content: string;
}
const PostItem = (props: IProps) => {
  const { id, writer, content, imgName, imgUrl } = props;
  return (
    <PostCardWrap key={id}>
      <PostHeader writer={writer}/>
      <PostBody>
        <PostBodyBlock className="nn">
          <div className="img-wrap">
            <img src={imgUrl} alt={imgName || ""} />
          </div>
          <div className="content-wrap">
            <p>{content}</p>
          </div>
        </PostBodyBlock>
        <Contour />
        <ReviewBlock>
          <Review />
        </ReviewBlock>
      </PostBody>
    </PostCardWrap>
  );
};

export default memo(PostItem);
