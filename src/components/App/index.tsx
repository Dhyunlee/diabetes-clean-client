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
    console.log(modalValue)
  }, [modalValue])
  return (
    <div className="app-wrap">
      <Header>
        <Topbar />
      </Header>
      <Main>
        <RouterContainer />
      </Main>
      <button
        onClick={() => {
          setOpenModal(true);
          openModal();
        }}
      >
        모달창
      </button>

      {/* 모달 컴포넌트 만드는 예시 */}
      {isOpenModal && (
          <div>
            <Modal>
              <div>모달이다.</div>
            </Modal>
          </div>
      )}
    </div>
  );
};

export default App;
