import { Navigate, Outlet } from "react-router-dom";
import useStorage from "utils/functions/useStorage";

export const PrivateRoutes = () => {
  const token = useStorage.getStorage("accessToken") || null;
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
