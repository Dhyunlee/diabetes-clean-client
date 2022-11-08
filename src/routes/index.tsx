import { Route, Routes } from "react-router-dom";

const RouterContainer = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>메인 화면</div>} />
        <Route path="/memo" element={<div>당수치 기록하기</div>} />
        <Route path="/story" element={<div>우리들의 생각, 기록하다</div>} />
        <Route path="/mypage" element={<div>마이페이지</div>} />
        <Route path="/*" element={<div>NotFound</div>} />
      </Routes>
    </>
  );
};

export default RouterContainer;
