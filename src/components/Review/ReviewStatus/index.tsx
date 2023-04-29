import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

const ReviewStatus = () => {
  return (
    <div className="review-status">
      <div className="review_item links">
        <span>
          <span>공감</span>
          <span className="likes-icon">
            {false ? (
              <FcLike color="#000" className="icon" />
            ) : (
              <AiOutlineHeart color="#f44336" />
            )}
          </span>
          <span className="count">{0}</span>
        </span>
      </div>
      <div className="review_item comments">
        <span>
          <span>댓글</span>
          <span className="count">{0}</span>
        </span>
      </div>
    </div>
  );
};

export default ReviewStatus;
