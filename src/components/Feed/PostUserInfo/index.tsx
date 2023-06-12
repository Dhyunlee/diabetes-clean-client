import { useNavigate } from "react-router-dom";
import Avatar from "../../Base/Avatar";
import { PostUserInfoInterface } from "./styles";
import { tiemBefore } from "utils/functions/tiemBefore";

interface IProps {
  userName: string;
  imgUrl?: string;
  imgName?: string;
  imgSize?: number;
  link: string;
  createdAt: Date | string;
}

const PostUserInfo = ({
  imgUrl,
  imgName,
  link,
  imgSize,
  userName,
  createdAt,
}: IProps) => {
  const navigate = useNavigate();
  return (
    <PostUserInfoInterface>
      <div className="left-img" onClick={() => navigate(link)}>
        <Avatar
          size={imgSize ?? 45}
          imgName={imgName ?? "avatar-img"}
          imgUrl={imgUrl}
        />
      </div>
      <div className="right-info">
        <div className="user_name">
          <span onClick={() => navigate(link)}>{userName}</span>
        </div>
        <div className="saved_date">
          <span>{tiemBefore(createdAt)}</span>
        </div>
      </div>
    </PostUserInfoInterface>
  );
};

export default PostUserInfo;
