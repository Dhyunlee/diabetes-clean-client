import { Container } from "styles/common";
import { MemoContents, MemoHeader } from "./styles";
import DateArea from "components/Memo/DateArea";
import Submenu from "components/Memo/Submenu";
import {Navigate, Route, Routes } from "react-router-dom";
import Diabetes from "components/Memo/Diabetes";

const Memo = () => {
  return (
    <Container>
      <MemoHeader>
        <div className="memo-title">
          <span>기록 내역</span>
        </div>
        <Submenu />
        <DateArea />
        <br />
      </MemoHeader>
      <MemoContents className="memoContainer">
        <Routes>
          <Route path="diabetes" element={<Diabetes />} />
          <Route path="diet" element={<>diet</>} />
          <Route path="*" element={<Navigate replace to="/memo/diabetes" />} />
        </Routes>
      </MemoContents>
    </Container>
  );
};

export default Memo;
