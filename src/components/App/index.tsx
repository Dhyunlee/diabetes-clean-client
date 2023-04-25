import { useEffect, useState } from "react";
import RouterContainer from "routes";
import Modal from "components/Base/Modal";
import Topbar from "components/TopBar";
import { useModal } from "hooks/useModal";
import { Header, Main } from "styles/common";
import { useRecoilValue } from "recoil";
import { modalState } from "store/modalState";
import MemoDetailModal from "components/Memo/MemoDetailModal";
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
      {isOpenModal && <MemoDetailModal isOpenModal={modalValue.isOpen} />}
    </div>
  );
};

export default App;
