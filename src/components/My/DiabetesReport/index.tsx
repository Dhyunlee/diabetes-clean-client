import NavMenu from "components/Base/NavMenu";
import ReportChart from "../ReportChart";
import { Title } from "../styles";
import { palette } from "libs/palette";

const periods = [
  { id: 1, label: "오늘", url: "/mypage" },
  { id: 2, label: "한 주", url: "/mypage" },
  { id: 3, label: "한 달", url: "/mypage" },
  { id: 4, label: "3개월", url: "/mypage" }
];

const DiabetesReport = () => {
  return (
    <div style={{ margin: "30px 0" }}>
      <Title>
        <span>당수치 통계</span>
      </Title>
      <div>
        <NavMenu
          lists={periods}
          borderColor={palette.indigo[3]}
          fontSize={"18px"}
        />
        <ReportChart />
      </div>
    </div>
  );
};

export default DiabetesReport;
