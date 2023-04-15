import React, {
  FunctionComponent,
  ReactNode,
  memo,
  useCallback,
  useRef,
  useState,
} from "react";
import { useEffect } from "react";
import { CloseBtn, ModalContainer, ModalWrap } from "./styles";
import { createPortal } from "react-dom";
import { useModal } from "hooks/useModal";

interface IModal {
  children: React.ReactNode;
}

const Modal: FunctionComponent<IModal> = ({
  children
}) => {
  const { modalStatus, closeModal } = useModal();
  const domRef = useRef<Element | null>();
  const [isMountedModal, setIsMountedModal] = useState(false);
  const [localVisible, setLocalVisible] = useState(modalStatus.isOpen);
  const [animate, setAnimate] = useState(false);

  const stopPropagation = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);

  useEffect(() => {
    setIsMountedModal(true);
    if (document) {
      const rootModal = document.getElementById("root-modal");
      domRef.current = rootModal; // ref에 root-modal 전달.
    }
    return () => {
      setIsMountedModal(false);
    };
  }, []);

  useEffect(() => {
    let t: any;

    const $body = document.body;
    // 모달 활성시 스크롤 방지
    $body.style.overflow = localVisible ? "hidden" : "auto"; 

    if (localVisible || !modalStatus.isOpen) {
      setAnimate(true);
      t = setTimeout(() => setAnimate(false), 250);
    }
    setLocalVisible(modalStatus.isOpen);


    return () => {
      clearTimeout(t);
    };
  }, [modalStatus.isOpen, localVisible]);

  const renderLayout = (element: ReactNode) => {
    if (domRef.current && isMountedModal) {
      return createPortal(element, domRef.current);
    }
  };

  if (!localVisible && !animate) return null;

  return (
    <>
      {renderLayout(
        <ModalWrap disappear={!localVisible} onClick={closeModal}>
          <ModalContainer disappear={!localVisible} onClick={stopPropagation}>
            <CloseBtn onClick={closeModal}>
              <span>&times;</span>
            </CloseBtn>
            {children}
          </ModalContainer>
        </ModalWrap>
      )}
    </>
  );
};

export default memo(Modal);
