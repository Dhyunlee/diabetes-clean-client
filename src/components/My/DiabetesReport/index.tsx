import NavMenu from "components/Base/NavMenu";
import ReportChart from "../ReportChart";
import { Title } from "../styles";
import { palette } from "libs/palette";

const periods = [
  { id: 1, text: "오늘" },
  { id: 2, text: "한 주" },
  { id: 3, text: "한 달" },
  { id: 4, text: "3개월" }
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
