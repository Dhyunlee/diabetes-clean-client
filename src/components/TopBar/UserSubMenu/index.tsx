import React, { useCallback, useMemo } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import api from "utils/axios";
import useStorage from "utils/functions/useStorage";
import SubMenu from "components/Base/SubMenu";
import { useRecoilValue } from "recoil";
import { userState } from "store/userState";

interface IProps {
  showSubMenu: boolean;
  onCloseMenu: () => void;
}
const UserSubMenu = ({ showSubMenu, onCloseMenu }: IProps) => {
  const userInfo = useRecoilValue(userState);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { removeStorage } = useStorage;
  const handleLogOut = useCallback(() => {
    api.get("/api/v1/auth/logout", { withCredentials: true }).then((res) => {
      removeStorage("accessToken");
      queryClient.setQueryData(["user"], false);
      navigate("/login", { replace: true });
    });

    onCloseMenu();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const menuItem = useMemo(
    () => [
      {
        id: 1,
        path: "/mypage",
        targetName: "마이페이지",
      },
      {
        id: 2,
        path: `/story/${userInfo.nickname}`,
        targetName: "내피드",
      },
      {
        id: 3,
        path: null,
        targetName: "로그아웃",
        handler: handleLogOut,
      },
    ],
    [handleLogOut, userInfo]
  );

  return (
    <>
      {showSubMenu && (
        <SubMenu
          menuItem={menuItem}
          showSubMenu={showSubMenu}
          onCloseMenu={onCloseMenu}
          customCss={{
            posX: '135px',
            posY: '60px',
          }}
        />
      )}
    </>
  );
};

export default React.memo(UserSubMenu);
