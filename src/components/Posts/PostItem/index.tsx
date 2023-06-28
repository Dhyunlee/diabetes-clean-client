import { memo } from "react";
import Review from "components/Review";
import { IContents } from "models/db";
import PostHeader from "components/Posts/PostHeader";

import {
  PostBody,
  PostBodyBlock,
  ReviewBlock,
  PostItemWrap
} from "components/Posts/styles";

const PostItem = (props: IContents) => {
  const { _id, writer, content, imageName, imageUrl, isDeleted, createdAt } =
    props;

  return (
    <PostItemWrap key={_id}>
      <PostHeader
        createdAt={createdAt}
        writer={writer}
        contentId={_id}
        isDeleted={isDeleted}
      />
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
                  <img src={imageUrl} alt={imageName || ""} />
                </div>
              )}
              <div className="content-wrap">
                <p>{content}</p>
              </div>
            </PostBodyBlock>
            <ReviewBlock>
              <Review postId={_id} />
            </ReviewBlock>
          </PostBody>
        </>
      )}
    </PostItemWrap>
  );
};

export default memo(PostItem);
