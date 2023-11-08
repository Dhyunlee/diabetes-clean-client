import { useEffect, useState } from "react";
import RouterContainer from "routes";
import { useRecoilValue } from "recoil";
import { modalState } from "store/modalState";
import Topbar from "components/TopBar";
import GlobalModal from "components/Base/GlobalModal";

import { Header, Main } from "styles/common";
import ScrollTop from "components/Base/ScrollTop";

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
        <ScrollTop />
      </Main>
      {isOpenModal && <GlobalModal isOpenModal={modalValue.isOpen} />}
      {/* <footer style={{ height: 150 }}>푸터</footer> */}
    </div>
  );
};

export default App;
