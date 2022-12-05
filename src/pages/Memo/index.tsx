import { Container } from "styles/common";
import { MemoContents, MemoHeader } from "./styles";
import DateArea from "components/Memo/DateArea";
import Submenu from "components/Memo/Submenu";
import {Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Diabetes from "components/Memo/Diabetes";
import { useQuery } from "react-query";
import { IUser } from "typings/db";
import { userStateApi } from "utils/apis";
import { useEffect } from "react";

const Memo = () => {
  const { data: userData } = useQuery<IUser>("user", userStateApi, {
    cacheTime: 60 * 1000 * 3,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      navigate("/login", { replace: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

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
