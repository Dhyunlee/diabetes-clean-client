import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { FcCollapse, FcExpand } from "react-icons/fc";
import { useRecoilState } from "recoil";
import gravatar from "gravatar";
import { IUserResponse } from "models/data";
import Avatar from "components/Base/Avatar";
import UserSubMenu from "components/TopBar/UserSubMenu";
import { getUserIdByToken } from "utils/apis/userApis";
import { userState } from "store/userState";
import { ROUTER_PATH } from "constants/router_path";
import { USER_KEY } from "constants/query_key";

import { MenuList, UserInfoWrap, UserItem } from "./styles";
import { useAPIQuery } from "hooks/service/queries";
import { loginState } from "store/loginState";

const UserMenu = () => {
  const [, setUserInfo] = useRecoilState(userState);
  const [isLoggedIn] = useRecoilState(loginState);
  const { LOGIN, SIGNUP } = ROUTER_PATH;

  // 유저 인증 상태
  const { data: me } = useAPIQuery<IUserResponse>(USER_KEY, getUserIdByToken);

  const [showUserSubMenu, setShowUserSubMenu] = useState(false);
  const onShowUserSubMenu = useCallback(() => {
    setShowUserSubMenu(!showUserSubMenu);
  }, [showUserSubMenu]);

  const onCloseMenu = useCallback(() => {
    setShowUserSubMenu(false);
  }, []);

  useEffect(() => {
    if (me) {
      setUserInfo(me.userInfo);
    }
  }, [setUserInfo, me]);

  const renderMenu = (isAuth: boolean) => {
    if (!isAuth) {
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
              {me && (
                <UserInfoWrap
                  onClick={onShowUserSubMenu}
                  onMouseDown={(e) => e.stopPropagation()}
                >
                  <span className="profile-img">
                    <Avatar
                      size={40}
                      imgUrl={
                        me?.userInfo?.imageSrc
                          ? `http://localhost:5000/${me?.userInfo?.imageSrc}`
                          : gravatar.url(me?.userInfo?.email, {
                              s: "40px",
                              d: "retro"
                            })
                      }
                    />
                  </span>
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

  return <>{renderMenu(isLoggedIn)}</>;
};

export default React.memo(UserMenu);
