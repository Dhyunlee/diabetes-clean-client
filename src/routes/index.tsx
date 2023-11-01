import { Route, Routes } from "react-router-dom";
import { ROUTER_PATH } from "constants/router_path";
import Login from "pages/Login";
import NotFound from "pages/NotFound";
import SignUp from "pages/SignUp";
import Story from "pages/Story";
import Memo from "pages/Memo";
import PrivateRoutes from "./PrivateRoutes";
import My from "pages/My";
import WriteMemo from "pages/WriteMemo";
import MyStory from "pages/MyStory";
import WriteContents from "pages/EditContents";
import MyPost from "components/MyFeed/MyPost";
import ActivityPost from "components/MyFeed/ActivityPost";
import LikedPost from "components/MyFeed/LikedPost";
import SearchPage from "pages/SearchPage";
import Home from "pages/Home";

const {
  INDEX,
  LOGIN,
  SIGNUP,
  SAVE_MEMO_DIABETES,
  UPDATE_DIABETES,
  MEMO,
  STORY,
  MYPAGE,
  SAVE_CONTENTS,
  UPDATE_CONTENTS,
  MY_FEED,
  SEARCH,
  EMPATHY
} = ROUTER_PATH;
const PublicRouter = () => {
  return (
    <Routes>
      <Route path={INDEX} index element={<Home />} />
      <Route element={<PrivateRoutes />}>
        <Route path={MEMO} element={<Memo />} />
        <Route path={SAVE_MEMO_DIABETES} element={<WriteMemo />} />
        <Route path={UPDATE_DIABETES} element={<WriteMemo />} />
        {/* 
          식단 CRUD 개발후 활성화
        <Route path={SAVE_MEMO} element={<WriteMemo />}>
          <Route path="diabetes" element={<FormDiabetes />} />
          <Route path="diet" element={<FormDiet />} />
        </Route> */}
        <Route path={SAVE_CONTENTS} element={<WriteContents />} />
        <Route path={UPDATE_CONTENTS} element={<WriteContents />} />
        <Route path={MYPAGE} element={<My />} />
      </Route>
      <Route path={LOGIN} element={<Login />} />
      <Route path={SIGNUP} element={<SignUp />} />
      <Route path={STORY} element={<Story />} />
      <Route path={SEARCH} element={<SearchPage />} />
      <Route path={MY_FEED} element={<MyStory />}>
        <Route index element={<MyPost />} />
        <Route path={EMPATHY} element={<LikedPost />} />
        <Route path="activity" element={<ActivityPost />} />
      </Route>
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
};

export default PublicRouter;
