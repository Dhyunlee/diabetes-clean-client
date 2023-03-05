import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { FcCollapse, FcExpand } from "react-icons/fc";
import { useQuery } from "react-query";
import gravatar from "gravatar";
import { getUserApi } from "utils/apis/userApis";
import { IUser } from "typings/db";
import { MenuList, ProfileWrap, UserItem } from "./styles";
import CardItem from "../CardItem";
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
