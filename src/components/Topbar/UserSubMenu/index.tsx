import React from "react";
import axios from "axios";
import styled from "@emotion/styled";

import Menu from "components/Menu";
import MenuItem from "../MenuItem";

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
        <MenuItem>
          <button onClick={handleLogOut}>로그아웃</button>
        </MenuItem>
      </MenuContainer>
    </Menu>
  );
};

const MenuContainer = styled.ul`
  padding: 5px 10px;
  text-align: center;
  position: fixed;
  top: 70px;
  right: 10px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 23px -5px rgb(0 0 0 / 25%);
`;

export default React.memo(UserSubMenu);
