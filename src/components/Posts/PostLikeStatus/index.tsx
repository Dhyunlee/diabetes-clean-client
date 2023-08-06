import useAddLikeMutation from "hooks/service/mutator/like/useAddLikeMutation";
import useUnLikeMutation from "hooks/service/mutator/like/useUnLikeMutation";
import { ILike } from "models/db";
import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { useRecoilValue } from "recoil";
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

  const onClickLikes = () => {
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
  };

  useEffect(() => {
    likes?.map((like) => {
      if (like.userId === currentId) {
        setIsLike(like.userId === currentId);
      }
    });

    return () => {
      if (!likes) {
        setIsLike(false);
      }
    };
  }, [currentId, likes]);
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
