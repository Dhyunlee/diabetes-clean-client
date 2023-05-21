import {useState} from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

interface IProps {
  commentLength?: number
}
const ReviewStatus = ({commentLength}: IProps) => {
  const [likes, setLikes] = useState(false);
  const onClickLikes = () => {
    setLikes(prev => !prev);
  }

  return (
    <div className="review-status">
      <div className="review_item links">
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
      <div className="review_item comments">
        <span>
          <span>댓글</span>
          <span className="count">{commentLength}</span>
        </span>
      </div>
    </div>
  );
};

export default ReviewStatus;
