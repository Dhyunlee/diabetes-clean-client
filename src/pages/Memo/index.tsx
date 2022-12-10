import { Container } from "styles/common";
import { MemoContents, MemoHeader } from "./styles";
import DateArea from "components/Memo/DateArea";
import Submenu from "components/Memo/Submenu";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Diabetes from "components/Memo/Diabetes";
import { useQuery } from "react-query";
import { IUser } from "typings/db";
import { getUserApi } from "utils/apis/userApis";
import { useEffect } from "react";
import Diet from "components/Memo/Diet";
import { getDiabetes } from "utils/apis/diabetesApis";

const Memo = () => {
  const { data: userData } = useQuery("user", getUserApi, {
    refetchOnWindowFocus: false,
  });
  const userId = userData?.email;

  const { data: diabetesData } = useQuery(
    ["diabetes", userId],
    (userId) => getDiabetes(userId),
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
      retry: 2,
      retryDelay: 10000,
      enabled: !!userId,
    }
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (userData === false) {
      navigate("/login", { replace: false });
    }
  }, [navigate, userData]);

  // console.log(diabetesData)

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
          <Route path="diet" element={<Diet />} />
          <Route path="*" element={<Navigate replace to="/memo/diabetes" />} />
        </Routes>
      </MemoContents>
    </Container>
  );
};

export default Memo;
