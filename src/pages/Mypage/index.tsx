import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { IUser } from "typings/db";
import { getUserApi } from "utils/apis/userApis";

const MyPage = () => {
  const { data: userData } = useQuery<IUser>("user", getUserApi, {
    refetchOnWindowFocus: false,
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

export default React.memo(MyPage);
