import React, { FC, MouseEvent, ReactNode, useCallback } from 'react';
import { CloseBtn, ModalContainer, ModalWrap } from './styles';

interface Props {
  children: ReactNode;
  isShowModal: boolean;
  onCloseModal: () => void;
}

const Modal: FC<Props> = ({ children, isShowModal, onCloseModal }) => {
  console.log(isShowModal);
  const stopPropagation = useCallback((e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);

  if (!isShowModal) return null;
  return (
    <ModalWrap onClick={onCloseModal}>
      <ModalContainer onClick={stopPropagation}>
        <CloseBtn onClick={onCloseModal}>
          <span>&times;</span>
        </CloseBtn>
        {children}
      </ModalContainer>
    </ModalWrap>
  );
};

Modal.defaultProps = {
  isShowModal: true,
};

// const Modal = ({ children, title }) => {
//   return (
//     <ModalWrap className="modal">
//       <ModalContainer>
//         <CloseBtn onClick={() => {}}>
//           <span>&times;</span>
//         </CloseBtn>
//         {children}
//       </ModalContainer>
//     </ModalWrap>
//   );
// };

export default Modal;
