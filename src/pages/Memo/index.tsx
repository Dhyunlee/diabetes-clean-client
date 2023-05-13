import { useEffect, useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { getUserApi } from "utils/apis/userApis";
import { getDiabetes } from "utils/apis/diabetesApis";
import DateArea from "components/Memo/Base/DateArea";
import Submenu from "components/Memo/Base/Submenu";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Diabetes from "components/Memo/DiabetesList";
import Diet from "components/Memo/Diet";
import { IDiabetesInfo, IDiabetesResponse, IUserResponse } from "models/db";

import { Container } from "styles/common";
import { MemoContents, MemoHeader } from "./styles";
import alertHandler from "utils/functions/alertHandler";
import SideBtnMenu from "components/Base/SideBtnMenu";
import { ROUTER_PATH } from "constants/router_path";
const Memo = () => {
  const { SAVE_MEMO_DIABETES} = ROUTER_PATH;

  const [curDate, setCurDate] = useState(dayjs());
  const [today] = useState(dayjs().format("YYYY-MM"));
  const [processData, setProcessData] = useState<IDiabetesInfo[]>([]);
  const { data: userData, error } = useQuery<IUserResponse>(
    ["user"],
    getUserApi,
    {
      refetchOnWindowFocus: false,
    }
  );
  const userId = userData?.userInfo?._id || null;
  const {
    data: diabetesData,
    isError,
    isLoading,
  } = useQuery<IDiabetesResponse>(
    ["diabetes", userId],
    () => getDiabetes(userId),
    {
      retry: 2,
      enabled: !!userId,
    }
  );

  useEffect(() => {
    const startOfDate = dayjs(curDate).startOf("month").format("YYYYMMDD");
    const endOfDate = dayjs(curDate).endOf("month").format("YYYYMMDD");

    // eslint-disable-next-line array-callback-return
    const thisMonthDate = diabetesData?.diabetesInfo.filter((item) => {
      const fomattedCreatedAt = dayjs(item.createdAt).format("YYYY-MM-DD");
      const date = parseInt(fomattedCreatedAt.split("-").join(""), 10);
      if (Number(startOfDate) <= date && date <= Number(endOfDate)) {
        return item;
      }
    });
    if (thisMonthDate) {
      setProcessData(thisMonthDate);
    }
  }, [curDate, diabetesData?.diabetesInfo]);


  const currentDate = `${curDate.year()}년 ${
    curDate.month() < 9 ? "0" + (curDate.month() + 1) : curDate.month() + 1
  }월`;

  const increamentDate = () => {
    const today_ = Number(today.split("-").join(""));
    const curDate_ = Number(curDate.format("YYYY-MM").split("-").join(""));
    if (today_ <= curDate_) {
      alertHandler.onDefaultAlert({
        msg: "이번달까지만 조회 가능합니다.",
        pos: "top",
      });
      return;
    }
    setCurDate(curDate.add(1, "month"));
  };

  const decreamentDate = () => {
    setCurDate(curDate.subtract(1, "month"));
  };
  const menuItem = useMemo(
    () => [
      {
        id: 1,
        path: `${SAVE_MEMO_DIABETES}`,
        targetName: "당수치 기록",
      },
      {
        id: 2,
        path: `/story`,
        targetName: "식단 기록",
      },
    ],
    [SAVE_MEMO_DIABETES]
  );

  if (isLoading) return <div>당수치 내역을 불러오는중입니다.</div>;
  if (isError) return <div>데이터를 가져오는 실패했어요</div>;


  return (
    <Container>
      <MemoHeader>
        <div className="memo-title">
          <span>기록 내역</span>
        </div>
        <Submenu />
        <DateArea
          currentDate={currentDate}
          increamentDate={increamentDate}
          decreamentDate={decreamentDate}
        />
        <br />
      </MemoHeader>
      <MemoContents className="memoContainer">
        <Routes>
          <Route
            path="diabetes"
            element={<Diabetes diabetesInfo={processData} />}
          />
          <Route path="diet" element={<Diet />} />
          <Route path="*" element={<Navigate replace to="/memo/diabetes" />} />
        </Routes>
      </MemoContents>
      <SideBtnMenu menuItem={menuItem}/>
    </Container>
  );
};

export default Memo;
