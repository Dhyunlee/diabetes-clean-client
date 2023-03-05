import styled from "@emotion/styled";

export const ModalWrap = styled.div`
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 111;
`;

export const ModalContainer = styled.div`
  width: auto;
  padding: 10px 50px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid gray;
  border-radius: 5px;
  background: #fff;
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

export const ModalTitle = styled.header`
  padding: 20px 30px;
  text-align: center;
  font-size: 20px;

  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background: gray;
  }
`;

export const ModalContent = styled.div``;
