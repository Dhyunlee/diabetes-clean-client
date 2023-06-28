import { Outlet } from "react-router-dom";
import { EditBody, EditHeader } from "./styles";
import NavMenu from "components/Base/NavMenu";
import { ROUTER_PATH } from "constants/router_path";
import { Container } from "styles/common";

const EditMemo = () => {
  const {SAVE_MEMO_DIABETES, SAVE_MEMO_DIET} = ROUTER_PATH;
  const subMenus = [
    { id: 1, text: "당수치 기록", url: `${SAVE_MEMO_DIABETES}` },
    { id: 2, text: "식단 기록", url: `${SAVE_MEMO_DIET}` },
  ];
  return (
    <Container>
      <EditHeader>
        <div className="memo-title">
          <span>당수치 기록하기</span>
        </div>
        <NavMenu
          lists={subMenus}
          bgColor="#f1f3f5"
          style={{ boxShadow: "0px 0px 12px -3px rgb(0 0 0 / 30%)" }}
        />
      </EditHeader>
      <EditBody>
        <Outlet />
      </EditBody>
    </Container>
  );
};

export default EditMemo;
