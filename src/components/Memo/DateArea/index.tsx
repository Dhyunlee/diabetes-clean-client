import { DateAreaContainer } from "pages/Memo/styles";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import dayjs from "dayjs";
import ko from "dayjs/locale/ko";
dayjs.locale(ko);

interface IProps {
  currentDate: string;
  increamentDate: () => void;
  decreamentDate: () => void;
}
const DateArea = ({ currentDate, increamentDate, decreamentDate }: IProps) => {
  return (
    <DateAreaContainer>
      <div className="btn-wrap">
        <button className="dateCtrlBtn" onClick={decreamentDate}>
          <AiOutlineArrowLeft />
        </button>
      </div>
      <div className="dateText-wrap">
        <span className="dateText">{currentDate}</span>
      </div>
      <div className="btn-wrap">
        <button className="dateCtrlBtn" onClick={increamentDate}>
          <AiOutlineArrowRight />
        </button>
      </div>
    </DateAreaContainer>
  );
};

export default DateArea;
