import { useCallback } from "react";
import { useRecoilValue } from "recoil";
import { MdEdit } from "react-icons/md";
import gravatar from "gravatar";
import { useDelUserMutation } from "hooks/service/mutator";
import { userState } from "store/userState";
import { palette } from "libs/palette";
import alertHandler, { alertMessage } from "utils/functions/alertHandler";
import Avatar from "components/Base/Avatar";
import Button from "components/Base/Button";
import { Title } from "components/My/styles";
import { EditBtnWrap, ProfileBlock, ProfileContainer } from "./styles";

const UserProfile = () => {
  const userInfo = useRecoilValue(userState);
  const useMutate = useDelUserMutation();

  const onDelUser = useCallback(() => {
    alertHandler
      .onConfirm({
        icon: "warning",
        html: (
          <p style={{ fontSize: 16 }}>
            회원 탈퇴하면 모든 데이터가 삭제됩니다.
            <br />
            그래도 회원 탈퇴를 하시겠습니까?
          </p>
        )
      })
      .then((result) => {
        if (result.isConfirmed) {
          useMutate.mutate(userInfo?._id);
        } else if (result.isDismissed) {
          alertHandler.onToast({ msg: alertMessage.cancelMsg });
        }
      });
  }, [useMutate, userInfo?._id]);

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
          <Button posX={150} size={16} text="회원 탈퇴" onClick={onDelUser} />
        </ProfileContainer>
      </ProfileBlock>
    </div>
  );
};

export default UserProfile;
