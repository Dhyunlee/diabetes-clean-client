import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { IUserResponse } from "models/db";
import { getUserApi } from "utils/apis/userApis";

const MyPage = () => {
  return (
    <div>MyPage</div>
  )
}

export default React.memo(MyPage);
