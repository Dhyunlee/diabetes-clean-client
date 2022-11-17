import React from "react";
import axios from "axios";

import Menu from "components/Menu";
import { MenuContainer } from "./styles";
import CardItem from "../CardItem";

interface Props {
  showUserSubMenu: boolean;
  handleCloseMenu: () => void;
}
const UserSubMenu = ({ showUserSubMenu, handleCloseMenu }: Props) => {
  const handleLogOut = () => {
    axios.get("/api/auth/logout").then((res) => {
      localStorage.setItem("isLogin", "false");
    });

    handleCloseMenu();
  };
  return (
    <Menu showMenu={showUserSubMenu} onCloseModal={handleCloseMenu}>
      <MenuContainer>
        <CardItem>
          <button onClick={handleLogOut}>로그아웃</button>
        </CardItem>
      </MenuContainer>
    </Menu>
  );
};

export default React.memo(UserSubMenu);
