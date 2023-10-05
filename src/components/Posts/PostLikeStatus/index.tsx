import { useState, useEffect, useCallback } from "react";
import { useRecoilValue } from "recoil";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { ILike } from "models/data";
import useAddLikeMutation from "hooks/service/mutator/like/useAddLikeMutation";
import useUnLikeMutation from "hooks/service/mutator/like/useUnLikeMutation";
import { userState } from "store/userState";

interface IProps {
  contentsId?: string;
  likes?: ILike[];
  likeCount?: number;
}

const PostLikeStatus = ({ contentsId, likes, likeCount }: IProps) => {
  const [isLike, setIsLike] = useState(false);
  const { _id: currentId } = useRecoilValue(userState);
  const addLike = useAddLikeMutation();
  const unLike = useUnLikeMutation();

  useEffect(() => {
    likes?.map((like) => {
      if (like.writer === currentId) {
        setIsLike(like.writer === currentId);
      }
    });

    return () => {
      if (!likes) {
        setIsLike(false);
      }
    };
  }, [currentId, likes]);

  const onClickLikes = useCallback(() => {
    if (!isLike) {
      const insertData = {
        userId: currentId,
        contentsId: contentsId
      };
      addLike.mutate(insertData);
    } else {
      const insertData = {
        userId: currentId,
        contentsId: contentsId
      };
      unLike.mutate(insertData);
      setIsLike(false);
    }
  }, [addLike, contentsId, currentId, isLike, unLike]);

  return (
    <div className="status_item links">
      <div>공감</div>
      <div className="likes-icon" onClick={onClickLikes}>
        {isLike ? (
          <FcLike color="#000" className="icon" />
        ) : (
          <AiOutlineHeart color="#f44336" className="icon" />
        )}
      </div>
      <div className="count">{likeCount}</div>
    </div>
  );
};

export default PostLikeStatus;
