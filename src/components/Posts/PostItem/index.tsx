import { memo } from "react";
import Comments from "components/Comments";
import PostHeader from "components/Posts/PostHeader";
import { ICommentResponse, IContents } from "models/db";

import {
  PostBody,
  PostBodyBlock,
  ReviewBlock,
  PostItemWrap
} from "components/Posts/styles";
import { Contour } from "styles/common";
import PostStatus from "../PostStatus";
import { useAPIByIdQuery } from "hooks/service/queries";
import { COMMENT_KEY } from "constants/query_key";
import { getAllComment } from "utils/apis/comment";

const PostItem = (props: IContents) => {
  const { _id, writer, content, imageName, imageUrl, isDeleted, createdAt } =
    props;

  const { data: comments } = useAPIByIdQuery<ICommentResponse>(
    _id,
    COMMENT_KEY,
    getAllComment
  );

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
            <PostBodyBlock>
              {comments && (
                <PostStatus commentLength={comments.comment.length} />
              )}
            </PostBodyBlock>
            <Contour />
            <ReviewBlock>
              {comments && (
                <Comments postId={_id} comments={comments?.comment} />
              )}
            </ReviewBlock>
          </PostBody>
        </>
      )}
    </PostItemWrap>
  );
};

export default memo(PostItem);
