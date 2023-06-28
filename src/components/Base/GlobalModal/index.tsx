import Modal from "components/Base/Modal";
import { useRecoilValue } from "recoil";
import { modalState } from "store/modalState";
import { Container } from "styles/common";

interface IDetail {
  isOpenModal: boolean;
}

const GlobalModal = ({ isOpenModal }: IDetail) => {
  const modalValue = useRecoilValue(modalState);

  return (
    <Modal isOpenModal={isOpenModal}>
      <Container>{modalValue.props}</Container>
    </Modal>
  );
};

export default GlobalModal;
