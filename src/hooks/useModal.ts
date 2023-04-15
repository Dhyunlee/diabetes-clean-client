import { useRecoilState } from "recoil";
import { IModalState, modalState } from "store/modalState";

export const useModal = () => {
  const [modalStatus, setModalStatus] = useRecoilState(modalState);

  const openModal = ({type, isOpen, data}: IModalState) => {
     setModalStatus({type, isOpen, data});  
  }

  const closeModal = () => {
    // setTimeout(() => {
      setModalStatus({type: null, isOpen: false});
    // }, 250)
  }

  return { modalStatus, closeModal, openModal };
};
