import { useState, useEffect, useMemo, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import dayjs from "dayjs";
import DateArea from "components/Memo/Base/DateArea";
import Submenu from "components/Memo/Base/Submenu";
import Diabetes from "components/Memo/DiabetesList";
import Diet from "components/Memo/Diet";
import SideBtnMenu from "components/Base/SideBtnMenu";
import alertHandler from "utils/functions/alertHandler";
import { getDiabetes } from "utils/apis/diabetesApis";
import { IDiabetesInfo, IDiabetesResponse } from "models/db";
import { userState } from "store/userState";
import { useAPIByIdQuery } from "hooks/service/queries";
import { ROUTER_PATH } from "constants/router_path";
import { DIABETES_KEY } from "constants/query_key";

import { Container } from "styles/common";
import { MemoContents, MemoHeader } from "./styles";

const MemoList = () => {
  const { SAVE_MEMO_DIABETES, SAVE_MEMO_DIET } = ROUTER_PATH;
  const { _id: userId } = useRecoilValue(userState);
  const [curDate, setCurDate] = useState(dayjs());
  const [today] = useState(dayjs().format("YYYY-MM"));
  const [processData, setProcessData] = useState<IDiabetesInfo[]>([]);

  const {
    data: diabetesData,
    isError,
    isLoading
  } = useAPIByIdQuery<IDiabetesResponse>(userId, DIABETES_KEY, getDiabetes);

  useEffect(() => {
    const startOfDate = dayjs(curDate).startOf("month").format("YYYYMMDD");
    const endOfDate = dayjs(curDate).endOf("month").format("YYYYMMDD");

    const thisMonthDate = (
      diabetesData?.diabetesInfo as IDiabetesInfo[]
    )?.filter((item: IDiabetesInfo) => {
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

  const currentDate = useMemo(
    () =>
      `${curDate.year()}년 ${
        curDate.month() < 9 ? "0" + (curDate.month() + 1) : curDate.month() + 1
      }월`,
    [curDate]
  );

  const increamentDate = useCallback(() => {
    const today_ = Number(today.split("-").join(""));
    const curDate_ = Number(curDate.format("YYYY-MM").split("-").join(""));
    if (today_ <= curDate_) {
      alertHandler.onDefaultAlert({
        msg: "이번달까지만 조회 가능합니다."
      });
      return;
    }
    setCurDate(curDate.add(1, "month"));
  }, [curDate, today]);

  const decreamentDate = useCallback(() => {
    setCurDate(curDate.subtract(1, "month"));
  }, [curDate]);

  const menuItem = useMemo(
    () => [
      {
        id: 1,
        path: `${SAVE_MEMO_DIABETES}`,
        label: "당수치 기록"
      },
      {
        id: 2,
        path: `${SAVE_MEMO_DIET}`,
        label: "식단 기록"
      }
    ],
    [SAVE_MEMO_DIABETES, SAVE_MEMO_DIET]
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
      <MemoContents>
        <Routes>
          <Route
            path="diabetes"
            element={<Diabetes diabetesInfo={processData} />}
          />
          <Route path="diet" element={<Diet />} />
        </Routes>
      </MemoContents>
      <SideBtnMenu menuItem={menuItem} />
    </Container>
  );
};

export default MemoList;
