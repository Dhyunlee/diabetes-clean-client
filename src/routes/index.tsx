import Memo from "pages/Memo";
import MyPage from "pages/Mypage";
import NotFound from "pages/NotFound";
import Story from "pages/Story";
import { Route, Routes } from "react-router-dom";

const RouterContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<Memo />} />
      <Route path="/memo" element={<Memo />} />
      <Route path="/story" element={<Story />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default RouterContainer;
