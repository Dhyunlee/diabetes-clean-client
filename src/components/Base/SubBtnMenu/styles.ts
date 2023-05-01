import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

interface IStyleProps {
  open: boolean;
}
export const SubMenuBtnContainer = styled.div`
  position: fixed;
  bottom: 60px;
  right: 100px;
`;

export const SubMenuBtn = styled.button<IStyleProps>`
  z-index: 5;
  cursor: pointer;
  width: 65px;
  height: 65px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  color: #fff;
  border-radius: 50%;
  border: none;
  outline: none;
  transform: translate(-50%, 50%);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.25s all ease-in;
  background: #70290d;

  &:hover {
    background: #c2906d;
  }
  &:active {
    opacity: 0.8;
  }
  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const BtnTextAnimationUp = keyframes`
  0% {
    transform: translateY(50px);
  }

  90% {
    transform: translateY(0px);
  }
`;

const BtnTextAnimationDown = keyframes`
  0% {
    transform: translateY(0px);
  }
  
  90% {
    transform: translateY(50px);
  }
`;

export const SubMenu = styled.ul<{open?: boolean}>`
  position: absolute;
  top: -41px;
  right: 40px;
  width: max-content;
  & li {
    animation: ${BtnTextAnimationUp};
    ${
      (props => !props.open && (
        css`
        animation: ${BtnTextAnimationDown};
      `
    ))
    }
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
`;