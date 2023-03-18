import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { FcCollapse, FcExpand } from "react-icons/fc";
import { useQuery } from "react-query";
import gravatar from "gravatar";
import { getUserApi } from "utils/apis/userApis";
import { IUserResponse } from "models/db";
import { MenuList, ProfileWrap, UserItem } from "./styles";
import UserSubMenu from "../UserSubMenu";
import { getCookie } from "utils/functions/cookie";

const UserMenu = () => {
  const token = getCookie("token");
  const { data: userData, error, isError, isLoading } = useQuery<IUserResponse>("user", getUserApi);
  const [showUserSubMenu, setShowUserSubMenu] = useState(false);

  const handleShowUserSubMenu = useCallback(() => {
    setShowUserSubMenu(!showUserSubMenu);
  }, [showUserSubMenu]);

  const handleCloseMenu = useCallback(() => {
    setShowUserSubMenu(false);
  }, []);
  const renderMenu = (token: string) => {
    if (!token) {
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
    } else {
      return (
        <>
          <MenuList>
            <UserItem>
              <Link to="/newmemo">기록 하기</Link>
            </UserItem>
            <UserItem>
              {userData && (
                <ProfileWrap onClick={handleShowUserSubMenu}>
                  <img
                    src={
                      userData?.userInfo?.imageSrc
                        ? userData?.userInfo?.imageSrc
                        : gravatar.url(userData?.userInfo.email, {
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
              )}
            </UserItem>
          </MenuList>

          {showUserSubMenu && (
            <UserSubMenu showUserSubMenu={showUserSubMenu} handleCloseMenu={handleCloseMenu} />
          )}
        </>
      );
    }
  };

  return <>{renderMenu(token)}</>;
};

export default React.memo(UserMenu);
