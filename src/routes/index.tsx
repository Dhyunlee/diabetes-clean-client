import Login from "pages/Login";
import Memo from "pages/Memo";
import MyPage from "pages/Mypage";
import NotFound from "pages/NotFound";
import SignUp from "pages/SignUp";
import Story from "pages/Story";
import { Navigate, Route, Routes } from "react-router-dom";

const RouterContainer = () => {
  return (
    <Routes>
      <Route path="/" index element={<Navigate replace to="/memo/diabetes" />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<Login />} />
      <Route path="memo/*" element={<Memo />} />
      <Route path="story" element={<Story />} />
      <Route path="mypage" element={<MyPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RouterContainer;
