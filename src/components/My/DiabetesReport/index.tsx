import DateSelect from "../DateSelect"
import ReportChart from "../ReportChart"
import { Title } from "../styles"

const DiabetesReport = () => {
  return (
    <div style={{margin: '30px 0'}}>
      <Title>
        <span>당수치 통계</span>
      </Title>
      <div>
      <DateSelect />
      <ReportChart/>
      </div>
    </div>
  )
}

export default DiabetesReport