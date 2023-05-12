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
  const { _id, writer, content, iamgeName, imageUrl, isDeleted } = props;

  return (
    <PostCardWrap key={_id}>
      <PostHeader writer={writer} contentId={_id} isDeleted={isDeleted} />
      {isDeleted ? (
        <PostBody>
          <PostBodyBlock>해당 게시물이 삭제되었습니다.</PostBodyBlock>
        </PostBody>
      ) : (
        <>
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
        </>
      )}
    </PostCardWrap>
  );
};

export default memo(PostItem);
