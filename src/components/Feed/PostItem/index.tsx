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
import { IContents } from "models/db";
const PostItem = (props: IContents) => {
  const { _id, writer, content, iamgeName, imageUrl } = props;

  return (
    <PostCardWrap key={_id}>
      <PostHeader writer={writer} />
      <PostBody>
        <PostBodyBlock className="nn">
          {imageUrl && (
            <div className="img-wrap">
              <img src={imageUrl} alt={iamgeName || ""} />
            </div>
          )}
          <div className="content-wrap">
            <p>{content}</p>
          </div>
        </PostBodyBlock>
        <Contour />
        <ReviewBlock>
          <Review postId={_id} />
        </ReviewBlock>
      </PostBody>
    </PostCardWrap>
  );
};

export default memo(PostItem);
