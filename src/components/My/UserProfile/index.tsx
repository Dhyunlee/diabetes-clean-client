import { useState, useCallback } from "react";
import { useRecoilValue } from "recoil";
import { MdEdit } from "react-icons/md";
import gravatar from "gravatar";
import { useDeleteUser } from "hooks/service/mutator";
import { userState } from "store/userState";
import alertHandler, { alertMessage } from "utils/functions/alertHandler";
import Avatar from "components/Base/Avatar";
import Button from "components/Base/Button";
import { Title } from "components/My/styles";
import Textarea from "components/Base/Textarea";
import {
  ButtonGroup,
  ProfileBlock,
  ProfileContainer,
  UserInfo
} from "./styles";
import useUpdateUser from "hooks/service/mutator/user/useUpdateUser";

const UserProfile = () => {
  const userInfo = useRecoilValue(userState);
  const deleteMutate = useDeleteUser();
  const updateMutate = useUpdateUser();

  const [isEditMode, setisEditMode] = useState(false);
  const [nickname, setNickname] = useState(userInfo.nickname);
  const [aboutMe, setAboutMe] = useState(userInfo.aboutMe);

  const onChangeNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
    e.target.focus();
  };
  const onChangeAboutMe = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAboutMe(e.target.value);
  };
  const onToggleEditMode = () => {
    setisEditMode((prev) => !prev);
    if (nickname || aboutMe) {
      setNickname("");
      setAboutMe("");
    }
  };

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
          deleteMutate.mutate(userInfo?._id);
        } else if (result.isDismissed) {
          alertHandler.onToast({ msg: alertMessage.cancelMsg });
        }
      });
  }, [deleteMutate, userInfo?._id]);

  const onUpdateUser = useCallback(() => {
    if (nickname || aboutMe) {
      const insertData = {
        nickname: nickname || userInfo.nickname,
        aboutMe: aboutMe || userInfo.aboutMe
      };
      console.log(insertData);
      updateMutate.mutate({ userId: userInfo?._id, userData: insertData });
    }
    setisEditMode((prev) => !prev);
  }, [
    aboutMe,
    nickname,
    updateMutate,
    userInfo?._id,
    userInfo.aboutMe,
    userInfo.nickname
  ]);

  return (
    <div>
      <Title>프로필</Title>
      <ProfileBlock>
        <ProfileContainer>
          <div className="profile-img">
            <button
              className="prof_btn"
              onClick={() => console.log("프로필 이미지 변경")}
            >
              <MdEdit color="#232" />
            </button>
            <Avatar
              size={160}
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
          <UserInfo>
            <div className="Info_block">
              <div className="info_title">닉네임</div>
              {isEditMode ? (
                <input
                  className="info_cont edit_mode"
                  placeholder={userInfo.nickname}
                  value={nickname}
                  onChange={onChangeNickName}
                />
              ) : (
                <div className="info_cont">{userInfo.nickname}</div>
              )}
            </div>
            <div className="Info_block">
              <div className="info_title">소개</div>
              {isEditMode ? (
                <Textarea
                  rows={11}
                  className="info_cont about_me edit_mode"
                  placeholder={userInfo.aboutMe}
                  defaultValue={aboutMe}
                  onChange={onChangeAboutMe}
                />
              ) : (
                <div className="info_cont about_me">{userInfo.aboutMe}</div>
              )}
            </div>
          </UserInfo>
          <ButtonGroup>
            {isEditMode ? (
              <Button text="프로필 적용" onClick={onUpdateUser} />
            ) : (
              <Button text="프로필 수정" onClick={onToggleEditMode} />
            )}
            <Button text="회원 탈퇴" onClick={onDelUser} />
          </ButtonGroup>
        </ProfileContainer>
      </ProfileBlock>
    </div>
  );
};

export default UserProfile;
