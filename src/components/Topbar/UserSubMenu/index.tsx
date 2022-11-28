import React, { useCallback } from "react";
import axios from "axios";

import Menu from "components/Menu";
import CardItem from "components/Topbar/CardItem";
import { MenuContainer } from "./styles";
import { useQueryClient } from "react-query";
import { Link } from "react-router-dom";

interface Props {
  showUserSubMenu: boolean;
  handleCloseMenu: () => void;
}
const UserSubMenu = ({ showUserSubMenu, handleCloseMenu }: Props) => {
  const queryClient = useQueryClient();

  const handleLogOut = useCallback(() => {
    axios.get("/api/v1/auth/logout").then((res) => {
      queryClient.setQueryData("user", () => null);
    });
    handleCloseMenu();
  }, [queryClient, handleCloseMenu]);

  return (
    <Menu showMenu={showUserSubMenu} onCloseModal={handleCloseMenu}>
      <MenuContainer>
        <CardItem>
          <button onClick={handleLogOut}>로그아웃</button>
        </CardItem>
        <CardItem>
          <Link to={'/mypage'}>마이페이지</Link>
        </CardItem>
      </MenuContainer>
    </Menu>
  );
};

export default React.memo(UserSubMenu);
