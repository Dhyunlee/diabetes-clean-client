import React, { useCallback } from "react";

import Menu from "components/Base/Menu";
import { useQueryClient } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { Li, MenuContainer } from "./styles";
import api from "utils/axios";

interface Props {
  showUserSubMenu: boolean;
  handleCloseMenu: () => void;
}
const UserSubMenu = ({ showUserSubMenu, handleCloseMenu }: Props) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const handleLogOut = useCallback(() => {
    api.get("/api/v1/auth/logout", {withCredentials: true}).then((res) => {
      queryClient.setQueryData("user", false);
    });

    handleCloseMenu();
    
    navigate("/login", { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Menu showMenu={showUserSubMenu} onCloseModal={handleCloseMenu}>
      <MenuContainer className="user-sub-menu">
        <Li>
          <Link onClick={handleCloseMenu} to={"/mypage"}>
            마이페이지
          </Link>
        </Li>
        <Li>
          <button onClick={handleLogOut}>로그아웃</button>
        </Li>
      </MenuContainer>
    </Menu>
  );
};

export default React.memo(UserSubMenu);
