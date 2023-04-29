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
import MyFeed from "pages/MyFeed";

const { INDEX, LOGIN, SIGNUP, SAVE_MEMO, MEMO, MEMO_DIABETES, STORY, MYPAGE } =
  ROUTER_PATH;
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
        <Route path={MYPAGE} element={<My />} />
      </Route>
      <Route
        path={LOGIN}
        element={<Login />}
      />
      <Route
        path={SIGNUP}
        element={<SignUp />}
      />
      <Route path={STORY} element={<Story />} />
      <Route path={'/profile/:write'} element={<MyFeed />}/>
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
};

export default PublicRouter;
