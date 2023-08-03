import { Navigate, Outlet } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginState } from "store/loginState";
export const PrivateRoutes = () => {
  const [isLoggedIn] = useRecoilState(loginState);
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
