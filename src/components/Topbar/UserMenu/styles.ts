import styled from '@emotion/styled';
import { ItemStyle } from '../MenuItem/styles';

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
  width: 32px;
  height: 32px;
  cursor: pointer;
  position: relative;
  top: 0;
  left: 0;

  img {
    position: absolute;
    top: -16px;
    left: 0;
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

export const UserItem = styled(ItemStyle)`
  border: 1px solid #c9c7c7;
  border-radius: 10px;
  margin-left: 0.7em;
  padding: 0 0.5em;

  &:hover {
    border: 1px solid #626161;
  }

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
