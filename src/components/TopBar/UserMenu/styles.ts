import styled from "@emotion/styled";
import { Li } from "../UserSubMenu/styles";

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  line-height: 27px;
  position: relative;

  a:hover {
    font-weight: 800;
  }
  button:hover {
    font-weight: 800;
  }
`;

export const UserInfoWrap = styled.span`
  cursor: pointer;
  position: relative;
  top: 0;
  left: 0;

  .menuIcon {
    position: absolute;
    top: -12px;
    left: 38px;
  }
`;

export const UserItem = styled(Li)`
  a {
    display: inline-block;
    border: none;
    background: transparent;
    font-size: 14px;
    cursor: pointer;
  }

  &:hover {
    background-color: transparent;
  }
`;