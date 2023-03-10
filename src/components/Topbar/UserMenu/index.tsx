import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { FcCollapse, FcExpand } from "react-icons/fc";
import { useQuery } from "react-query";
import gravatar from "gravatar";
import { getUserApi } from "utils/apis/userApis";
import { IUser } from "typings/db";
import { MenuList, ProfileWrap, UserItem } from "./styles";
import UserSubMenu from "../UserSubMenu";

const UserMenu = () => {
  const { data: userData, isLoading } = useQuery<IUser>("user", getUserApi, {
    refetchOnWindowFocus: false,
  });
  const [showUserSubMenu, setShowUserSubMenu] = useState(false);

  const handleShowUserSubMenu = useCallback(() => {
    setShowUserSubMenu(!showUserSubMenu);
  }, [showUserSubMenu]);

  const handleCloseMenu = useCallback(() => {
    setShowUserSubMenu(false);
  }, []);

  if (isLoading) {
    return <div>유저 정보 불러오는중...</div>;
  }

  if (!userData) {
    return (
      <>
        <UserItem>
          <Link to="/login">로그인</Link>
        </UserItem>
        <UserItem>
          <Link to="/signup">회원가입</Link>
        </UserItem>
      </>
    );
  }

  return (
    <>
      {userData && (
        <MenuList>
          <UserItem>
            <Link to="/newmemo">기록 하기</Link>
          </UserItem>
          <UserItem>
            <ProfileWrap onClick={handleShowUserSubMenu}>
              <img
                src={
                  userData?.imageSrc
                    ? userData.imageSrc
                    : gravatar.url(userData?.email, {
                        s: "32px",
                        d: "retro",
                      })
                }
                alt="profile"
              />
              <span className="menuIcon">{showUserSubMenu ? <FcCollapse /> : <FcExpand />}</span>
            </ProfileWrap>
          </UserItem>
        </MenuList>
      )}
      {showUserSubMenu && (
        <UserSubMenu showUserSubMenu={showUserSubMenu} handleCloseMenu={handleCloseMenu} />
      )}
    </>
  );
};

export default React.memo(UserMenu);
