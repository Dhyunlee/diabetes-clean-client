import { useEffect, useState } from "react";
import RouterContainer from "routes";
import Modal from "components/Base/Modal";
import Topbar from "components/TopBar";
import { useModal } from "hooks/useModal";
import { Header, Main } from "styles/common";
import { useRecoilValue } from "recoil";
import { modalState } from "store/modalState";
const App = () => {
  const modalValue = useRecoilValue(modalState);
  const { openModal } = useModal();
  const [isOpenModal, setOpenModal] = useState(false);

  useEffect(() => {
    const $body = document.body;
    // 모달 활성시 스크롤 방지
    $body.style.overflow = modalValue.isOpen ? "hidden" : "auto";

    setOpenModal(modalValue.isOpen);
  }, [isOpenModal, modalValue]);
  return (
    <div className="app-wrap">
      <Header>
        <Topbar />
      </Header>
      <Main>
        <RouterContainer />
      </Main>

      {/* 모달 컴포넌트 만드는 예시 */}
      {isOpenModal && (
        <Modal isOpenModal={modalValue.isOpen}>
          <div>{modalValue.data?.createdAt}</div>
          <div>{modalValue.data?._id}</div>
          <div>{modalValue.data?.slot}</div>
          <div>{modalValue.data?.sugar_level}</div>
          <div>{modalValue.data?.writer}</div>
        </Modal>
      )}
    </div>
  );
};

export default App;
