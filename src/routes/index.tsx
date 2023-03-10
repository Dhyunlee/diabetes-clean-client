import { ROUTER_PATH } from "constants/router_path";
import Login from "pages/Login";
import Memo from "pages/Memo";
import MyPage from "pages/Mypage";
import NotFound from "pages/NotFound";
import SignUp from "pages/SignUp";
import Story from "pages/Story";
import WriteMemo from "pages/WriteMemo";

import { Navigate, Route, Routes } from "react-router-dom";

const RouterContainer = () => {
  const { INDEX, LOGIN, SIGNUP, MEMO, MEMO_DIABETES, SAVE_MEMO, MYPAGE, STORY } = ROUTER_PATH;

  return (
    <Routes>
      <Route path={INDEX} index element={<Navigate replace to={MEMO_DIABETES} />} />
      <Route path={SIGNUP} element={<SignUp />} />
      <Route path={LOGIN} element={<Login />} />
      <Route path={MEMO} element={<Memo />} />
      <Route path={SAVE_MEMO} element={<WriteMemo />} />
      <Route path={STORY} element={<Story />} />
      <Route path={MYPAGE} element={<MyPage />} />
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
};

export default RouterContainer;
