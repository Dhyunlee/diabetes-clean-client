import { useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { IUser } from "typings/db";
import { userStateApi } from "utils/apis";

const MyPage = () => {
  const { data: userData, isLoading } = useQuery<IUser>("user", userStateApi, {
    cacheTime: 60 * 1000 * 3,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      navigate("/login", { replace: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  return (
    <div>MyPage</div>
  )
}

export default MyPage;
