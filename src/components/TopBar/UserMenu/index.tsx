import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { FcCollapse, FcExpand } from "react-icons/fc";
import { useRecoilState } from "recoil";
import { useQuery } from "@tanstack/react-query";
import gravatar from "gravatar";
import { IUserResponse } from "models/db";
import Avatar from "components/Base/Avatar";
import UserSubMenu from "components/TopBar/UserSubMenu";
import { getCurrentUserApi } from "utils/apis/userApis";
import useStorage from "utils/functions/useStorage";
import { userState } from "store/userState";
import { ROUTER_PATH } from "constants/router_path";
import { USER_KEY } from "constants/query_key";

import { MenuList, UserInfoWrap, UserItem } from "./styles";
import { useAPIQuery } from "hooks/service/queries";

const UserMenu = () => {
  const [, setUserInfo] = useRecoilState(userState);
  const { LOGIN, SIGNUP } = ROUTER_PATH;
  const token = useStorage.getStorage("accessToken");

  const { data: userData } = useAPIQuery<IUserResponse>(
    USER_KEY,
    getCurrentUserApi
  );
  const [showUserSubMenu, setShowUserSubMenu] = useState(false);

  const onShowUserSubMenu = useCallback(() => {
    setShowUserSubMenu(!showUserSubMenu);
  }, [showUserSubMenu]);

  const onCloseMenu = useCallback(() => {
    setShowUserSubMenu(false);
  }, []);

  useEffect(() => {
    if (userData) {
      setUserInfo(userData.userInfo);
    }
  }, [setUserInfo, userData]);

  const renderMenu = (token: string | null) => {
    if (!token) {
      return (
        <>
          <UserItem>
            <Link to={LOGIN}>로그인</Link>
          </UserItem>
          <UserItem>
            <Link to={SIGNUP}>회원가입</Link>
          </UserItem>
        </>
      );
    } else {
      return (
        <>
          <MenuList>
            <UserItem>
              {userData && (
                <UserInfoWrap
                  onClick={onShowUserSubMenu}
                  onMouseDown={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <Avatar
                    size={32}
                    imgUrl={
                      userData?.userInfo?.imageSrc
                        ? userData?.userInfo?.imageSrc
                        : gravatar.url(userData?.userInfo?.nickname, {
                            s: "32px",
                            d: "retro"
                          })
                    }
                  />
                  <span className="menuIcon">
                    {showUserSubMenu ? <FcCollapse /> : <FcExpand />}
                  </span>
                </UserInfoWrap>
              )}
            </UserItem>
          </MenuList>
          <UserSubMenu
            showSubMenu={showUserSubMenu}
            onCloseMenu={onCloseMenu}
          />
        </>
      );
    }
  };

  return <>{renderMenu(token)}</>;
};

export default React.memo(UserMenu);
