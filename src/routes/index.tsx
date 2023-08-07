import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTER_PATH } from "constants/router_path";
import Login from "pages/Login";
import NotFound from "pages/NotFound";
import SignUp from "pages/SignUp";
import Story from "pages/Story";
import Memo from "pages/Memo";
import PrivateRoutes from "./PrivateRoutes";
import My from "pages/My";
import WriteMemo from "pages/WriteMemo";
import FormDiabetes from "components/EditMemo/FormDiabetes";
import FormDiet from "components/EditMemo/FormDiet";
import MyStory from "pages/MyStory";
import WriteContents from "pages/WriteContents";
import MyPost from "components/MyFeed/MyPost";
import ActivityPost from "components/MyFeed/ActivityPost";
import LikedPost from "components/MyFeed/LikedPost";

const {
  INDEX,
  LOGIN,
  SIGNUP,
  SAVE_MEMO,
  MEMO,
  MEMO_DIABETES,
  STORY,
  MYPAGE,
  SAVE_CONTENTS,
  MY_FEED
} = ROUTER_PATH;
const PublicRouter = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route
          path={INDEX}
          index
          element={<Navigate replace to={MEMO_DIABETES} />}
        />
        <Route path={MEMO} element={<Memo />} />
        <Route path={SAVE_MEMO} element={<WriteMemo />}>
          <Route path="diabetes" element={<FormDiabetes />} />
          <Route path="diet" element={<FormDiet />} />
        </Route>
        <Route path={SAVE_CONTENTS} element={<WriteContents />} />
        <Route path={MYPAGE} element={<My />} />
      </Route>
      <Route path={LOGIN} element={<Login />} />
      <Route path={SIGNUP} element={<SignUp />} />
      <Route path={STORY} element={<Story />} />
      <Route path={MY_FEED} element={<MyStory />}>
        <Route index element={<MyPost />} />
        <Route path="empathy" element={<LikedPost />} />
        <Route path="activity" element={<ActivityPost />} />
      </Route>
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
};

export default PublicRouter;
