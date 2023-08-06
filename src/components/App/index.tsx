import { useEffect, useState } from "react";
import RouterContainer from "routes";
import { useRecoilValue } from "recoil";
import { modalState } from "store/modalState";
import Topbar from "components/TopBar";
import GlobalModal from "components/Base/GlobalModal";

import { Header, Main } from "styles/common";

const App = () => {
  const modalValue = useRecoilValue(modalState);
  const [isOpenModal, setOpenModal] = useState(false);

  useEffect(() => {
    const $body = document.body;
    // 모달 활성시 스크롤 방지
    $body.style.overflow = modalValue.isOpen ? "hidden" : "auto";
    setOpenModal(modalValue.isOpen);
  }, [isOpenModal, modalValue.isOpen]);

  return (
    <div className="app-wrap">
      <Header>
        <Topbar />
      </Header>
      <Main>
        <RouterContainer />
      </Main>
      {isOpenModal && <GlobalModal isOpenModal={modalValue.isOpen} />}
    </div>
  );
};

export default App;
