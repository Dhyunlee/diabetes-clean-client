import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { FcCollapse, FcExpand } from "react-icons/fc";
import CardItem from "../CardItem";
import UserSubMenu from "../UserSubMenu";
import { UserItem, MenuList, ProfileWrap } from "./styles";
import { useQuery } from "react-query";
import { userStateApi } from "utils/apis";
import { IUser } from "typings/db";

const UserMenu = () => {
  const { data: userData, isLoading } = useQuery<IUser>("user", userStateApi, {
    cacheTime: 60 * 1000 * 3,
  });
  const [showUserSubMenu, setShowUserSubMenu] = useState(false);

  const handleShowUserSubMenu = useCallback(() => {
    setShowUserSubMenu(!showUserSubMenu);
  }, [showUserSubMenu]);

  const handleCloseMenu = useCallback(() => {
    setShowUserSubMenu(false);
  }, []);

  console.log(userData)
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
      <MenuList>
        {userData && (
          <>
            <UserItem>
              <Link to="/newmemo">기록 하기</Link>
            </UserItem>
            <CardItem>
              <ProfileWrap onClick={handleShowUserSubMenu}>
                <img src={""} alt="profile" />
                <span className="menuIcon">
                  {showUserSubMenu ? <FcCollapse /> : <FcExpand />}
                </span>
              </ProfileWrap>
            </CardItem>
          </>
        )}
      </MenuList>
      {showUserSubMenu && (
        <UserSubMenu
          showUserSubMenu={showUserSubMenu}
          handleCloseMenu={handleCloseMenu}
        />
      )}
    </>
  );
};

export default React.memo(UserMenu);
