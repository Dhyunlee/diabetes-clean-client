import { ROUTER_PATH } from "constants/router_path";
import Login from "pages/Login";
import Memo from "pages/Memo";
import MyPage from "pages/My";
import MyFeed from "pages/MyFeed";
import NotFound from "pages/NotFound";
import SignUp from "pages/SignUp";
import Story from "pages/Story";
import WriteContents from "pages/WriteContents";
import WriteMemo from "pages/WriteMemo";

import { Navigate, Route, Routes } from "react-router-dom";
import { getCookie } from "utils/functions/cookie";

const RouterContainer = () => {
  const token = getCookie("token");
  console.log({token})
  const { INDEX, LOGIN, SIGNUP, MEMO, MEMO_DIABETES, SAVE_MEMO, MYPAGE, SAVE_CONTENTS,STORY, MY_FEED } = ROUTER_PATH;
  
  return (
    <Routes>
      <Route path={INDEX} index element={<Navigate replace to={MEMO_DIABETES} />} />
      <Route path={SIGNUP} element={<SignUp />} />
      <Route path={LOGIN} element={<Login />} />
      <Route path={SAVE_MEMO} element={<WriteMemo />} />
      <Route path={MEMO} element={<Memo />} />
      <Route path={SAVE_CONTENTS} element={<WriteContents />} />
      <Route path={STORY} element={<Story />} />
      <Route path={MY_FEED} element={<MyFeed />} />
      <Route path={MYPAGE} element={<MyPage />} />
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
};

export default RouterContainer;
