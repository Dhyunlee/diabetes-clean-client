import { useEffect  } from "react";
import { Container } from "styles/common";
import DateArea from "components/Memo/DateArea";
import Submenu from "components/Memo/Submenu";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Diabetes from "components/Memo/Diabetes";
import { useQuery } from "react-query";
import { getUserApi } from "utils/apis/userApis";
import Diet from "components/Memo/Diet";
import { getDiabetes } from "utils/apis/diabetesApis";
import { IDiabetesResponse, IUserResponse } from "models/db";
import { MemoContents, MemoHeader } from "./styles";
const Memo = () => {
  const navigate = useNavigate();
  const { data: userData, error } = useQuery<IUserResponse>("user", getUserApi, {
    refetchOnWindowFocus: false,
  });
  const userId: string | null = userData?.userInfo._id || null;
  const {
    data: diabetesData,
    isError,
    isLoading,
  } = useQuery<IDiabetesResponse>(["diabetes", userId], () => getDiabetes(userId), {
    retry: 2,
    enabled: !!userId,
  });

  useEffect(() => {
    if (!userData) {
      navigate("/login", { replace: false });
    }
  }, [navigate, userData]);

  if (isLoading) return <div>당수치 내역을 불러오는중입니다.</div>;
  if (isError) return <div>데이터를 가져오는 실패했어요</div>;
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
          <Route path="diabetes" element={<Diabetes diabetesInfo={diabetesData?.diabetesInfo} />} />
          <Route path="diet" element={<Diet />} />
          <Route path="*" element={<Navigate replace to="/memo/diabetes" />} />
        </Routes>
      </MemoContents>
    </Container>
  );
};

export default Memo;
