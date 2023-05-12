import React, { useCallback, useMemo } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import api from "utils/axios";
import useStorage from "utils/functions/useStorage";
import SubMenu from "components/Base/SubMenu";

interface Props {
  showSubMenu: boolean;
  onCloseMenu: () => void;
}
const UserSubMenu = ({ showSubMenu, onCloseMenu }: Props) => {
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
        path: null,
        targetName: "로그아웃",
        handler: handleLogOut,
      },
    ],
    [handleLogOut]
  );

  return (
    <>
      {showSubMenu && (
        <SubMenu
          menuItem={menuItem}
          customCss={{
            posY: 60,
            posX: 30,
          }}
          showSubMenu={showSubMenu}
          onCloseMenu={onCloseMenu}
        />
      )}
    </>
  );
};

export default React.memo(UserSubMenu);
