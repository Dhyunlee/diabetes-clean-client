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

export const ProfileWrap = styled.span`
  width: 40px;
  height: 40px;
  cursor: pointer;
  position: relative;
  top: 0;
  left: 0;

  img {
    position: absolute;
    top: -20px;
    left: -7px;
    border: 1px solid rgb(0 0 0 / 10%);
    padding: 2px;
    border-radius: 50%;
    width: inherit;
    height: inherit;
  }

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
`;

// 서브 메뉴
export const UserSubmenu = styled.ul`
  display: none;
  position: absolute;
  left: -59px;
  top: 51px;
  background: #fff;
  border: 1px solid gray;
  border-radius: 5px;

  &.active {
    display: block;
  }

  li {
    text-align: center;
    border-bottom: 1px solid gray;
    padding-top: 5px;
    cursor: pointer;
  }
`;
