import React, { useCallback } from "react";

import Menu from "components/Base/Menu";
import { useQueryClient } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { Li, MenuContainer } from "./styles";
import api from "utils/axios";
import useStorage from "utils/functions/useStorage";

interface Props {
  showUserSubMenu: boolean;
  handleCloseMenu: () => void;
}
const UserSubMenu = ({ showUserSubMenu, handleCloseMenu }: Props) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {removeStorage} = useStorage;

  const handleLogOut = useCallback(() => {
    api.get("/api/v1/auth/logout", { withCredentials: true }).then((res) => {
      removeStorage('accessToken')
      queryClient.setQueryData("user", false);
      navigate("/login", { replace: true });
    });

    handleCloseMenu();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Menu showMenu={showUserSubMenu} handleCloseMenu={handleCloseMenu}>
      <MenuContainer className="user-sub-menu">
        <Li onClick={() => navigate("/mypage")}>
          <Link onClick={handleCloseMenu} to={"/mypage"}>
            마이페이지
          </Link>
        </Li>
        <Li onClick={handleLogOut}>
          <button onClick={handleLogOut}>로그아웃</button>
        </Li>
      </MenuContainer>
    </Menu>
  );
};

export default React.memo(UserSubMenu);