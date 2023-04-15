import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const fadeIn = keyframes`
 from {
    opacity: 0;
} to {
    opacity: 1;
 }
`;

export const fadeOut = keyframes`
 from {
    opacity: 1;
} to {
    opacity: 0;
 }
`;

export const slideUp = keyframes`
 from {
    transform: translateY(200px);
} to {
    transform: translateY(0px);
 }
`;

export const slideDown = keyframes`
 from {
    transform: translateY(0px);
 } to {
    transform: translateY(200px);
 }
`;

export const ModalWrap = styled.div<{disappear: boolean}>`
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  //--- animation: test
  transition: opacity 0.3s ease-in-out;
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  ${(props) => {
    return props.disappear && css`
      animation-name: ${fadeOut};
    `
  }}
`;

export const ModalContainer = styled.div<{disappear: boolean}>`
  width: auto;
  padding: 10px 50px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid gray;
  border-radius: 5px;
  background: #fff;

  animation-duration: 0.3s;
  animation-timing-function: ease-in-out; /* 첨에 빨랐다가 느려지는 효과 */
  animation-name: ${slideUp};
  animation-fill-mode: forwards; /* 애니메이션이 끝난 상태를 유지 */

  ${(props) => {
    return props.disappear && css`
      animation-name: ${slideDown};
    `
  }}
`;

export const CloseBtn = styled.button`
  width: 25px;
  height: 25px;
  background: transparent;
  border: none;
  box-shadow: 0 0 0 0 rgb(0 0 0 / 10%), 0 2px 5px rgb(0 0 0 / 10%);
  border-radius: 5px;
  position: absolute;
  top: 3px;
  right: 6px;
  cursor: pointer;

  &:active {
    margin-top: -2px;
  }

  span {
    width: 100%;
    height: 100%;
    display: inline-block;
    padding: 0 5px;
    font-size: 20px;
    color: #2d2d2d;
  }
`;

export const ModalContent = styled.div``;
