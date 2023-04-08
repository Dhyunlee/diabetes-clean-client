import styled from '@emotion/styled';

export const MenuWrap = styled.div`
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;

  &.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

export const MenuContainer = styled.div`
  width: auto;
  padding: 10px 50px;
  border-radius: 5px;
`;

export const ModalContent = styled.div``;
