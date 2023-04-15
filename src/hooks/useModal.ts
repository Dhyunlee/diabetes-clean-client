import { useRecoilState } from "recoil";
import { useCallback } from "react";
import { modalState } from "store/modalState";

export const useModal = () => {
  const [modalStatus, setModalStatus] = useRecoilState(modalState);

  const closeModal = useCallback(() => {
      setModalStatus({
        isOpen: false,
      });
  }, [setModalStatus]);

  const openModal = useCallback(() => {
    setModalStatus({
      isOpen: true,
    });
  }, [setModalStatus]);

  return { modalStatus, closeModal, openModal };
};
