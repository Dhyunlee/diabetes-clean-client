import { useRecoilValue } from "recoil";
import { MdEdit } from "react-icons/md";
import gravatar from "gravatar";
import Avatar from "components/Base/Avatar";
import { palette } from "libs/palette";
import { userState } from "store/userState";
import { EditBtnWrap, ProfileBlock, ProfileContainer } from "./styles";
import Button from "components/Base/Button";
import { Title } from "../styles";

const UserProfile = () => {
  const userInfo = useRecoilValue(userState);
  return (
    <div>
      <Title>프로필</Title>
      <ProfileBlock>
        <ProfileContainer>
          <div className="profile-img">
            <Avatar
              size={170}
              imgUrl={
                userInfo?.imageSrc
                  ? userInfo?.imageSrc
                  : gravatar.url(userInfo?.email, {
                      s: "170px",
                      d: "retro"
                    })
              }
            />
          </div>
          <div className="user-info">
            <div>{userInfo.nickname}</div>
            <div>{userInfo.email}</div>
          </div>
          <EditBtnWrap>
            <div className="inner icon-wrap">
              <MdEdit className="icon" color={palette.gray[5]} />
            </div>
            <div className="inner btn-name">
              <span>프로필 수정</span>
            </div>
          </EditBtnWrap>
          <Button posX={150} size={16} text="회원 탈퇴" />
        </ProfileContainer>
      </ProfileBlock>
    </div>
  );
};

export default UserProfile;
