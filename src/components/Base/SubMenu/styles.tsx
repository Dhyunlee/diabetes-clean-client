import styled from "@emotion/styled";
import { palette } from "libs/palette";

export const SubMenuList = styled.ul<{
  posX?: number;
  posY?: number;
}>`
  z-index: 2;
  background: #fff;
  width: max-content;

  & li {
  }
  & li:nth-of-type(1) {
    animation-duration: 0.5s;
  }
  & li:nth-of-type(2) {
    animation-duration: 0.8s;
  }
  & li:nth-of-type(3) {
    animation-duration: 1s;
  }
  a {
    display: block;
  }
`;

export const SubMenuItem = styled.li`
  font-size: 15px;
  padding: 8px;
  position: relative;
  top: 0;
  left: 0;
  cursor: pointer;

  a,
  button {
    font-size: inherit;
    border: none;
    border-radius: 4px;
    background: transparent;
    cursor: pointer;
  }
  &:hover {
    background-color: ${palette.gray[1]};
  }
`;
