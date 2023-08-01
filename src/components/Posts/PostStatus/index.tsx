import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { PostStatusContainer } from "./styles";

interface IProps {
  commentLength: number;
}
const PostStatus = ({ commentLength }: IProps) => {
  const [likes, setLikes] = useState(false);
  const onClickLikes = () => {
    setLikes((prev) => !prev);
  };
  return (
    <PostStatusContainer>
      <div className="status_inner">
        <div className="status_item links">
          <span>
            <span>공감</span>
            <span className="likes-icon" onClick={onClickLikes}>
              {likes ? (
                <FcLike color="#000" className="icon" />
              ) : (
                <AiOutlineHeart color="#f44336" />
              )}
            </span>
            <span className="count">{likes ? 1 : 0}</span>
          </span>
        </div>
        <div className="status_item comments">
          <span>
            <span>댓글</span>
            <span className="count">{commentLength}</span>
          </span>
        </div>
      </div>
    </PostStatusContainer>
  );
};

export default PostStatus;
