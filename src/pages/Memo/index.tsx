import { Container } from "styles/common";
import DateArea from "components/Memo/DateArea";
import Submenu from "components/Memo/Submenu";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Diabetes from "components/Memo/Diabetes";
import { useQuery } from "react-query";
import { getUserApi } from "utils/apis/userApis";
import { useEffect } from "react";
import Diet from "components/Memo/Diet";
import { getDiabetes } from "utils/apis/diabetesApis";
import { IDiabetes } from "typings/db";
import { MemoContents, MemoHeader } from "./styles";
const Memo = () => {
  const { data: userData, error } = useQuery("user", getUserApi, {
    refetchOnWindowFocus: false,
  });
  const userId = userData?._id;

  const { data: diabetesData, isError, isLoading } = useQuery<IDiabetes[]>(
    ["diabetes", userId],
    () => getDiabetes(userId),
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

  if(isLoading) return <div>당수치 내역을 불러오는중입니다.</div>
  if(isError) return <div>데이터를 가져오는 실패했어요</div>
  if(error) window.alert("네트워크 오류\n잠시후 다시 시도해주세요")

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
          <Route path="diabetes" element={<Diabetes diabetesData={diabetesData}/>} />
          <Route path="diet" element={<Diet />} />
          <Route path="*" element={<Navigate replace to="/memo/diabetes" />} />
        </Routes>
      </MemoContents>
    </Container>
  );
};

export default Memo;
