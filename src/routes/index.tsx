import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTER_PATH } from "constants/router_path";
import Login from "pages/Login";
import NotFound from "pages/NotFound";
import SignUp from "pages/SignUp";
import Story from "pages/Story";
import Memo from "pages/Memo";
import PrivateRoutes from "./PrivateRoutes";
import My from "pages/My";
import useStorage from "utils/functions/useStorage";

const { INDEX, LOGIN, SIGNUP, MEMO, MEMO_DIABETES, STORY, MYPAGE } =
  ROUTER_PATH;
const PublicRouter = () => {
  const token = useStorage.getStorage("accessToken") || false;

  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route
          path={INDEX}
          index
          element={<Navigate replace to={MEMO_DIABETES} />}
        />
        <Route path={MEMO} element={<Memo />} />
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
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
};

export default PublicRouter;
