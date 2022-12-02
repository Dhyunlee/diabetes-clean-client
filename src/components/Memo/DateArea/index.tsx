import { DateAreaContainer } from "pages/Memo/styles";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import dayjs from "dayjs";
import ko from "dayjs/locale/ko";
dayjs.locale(ko);

const DateArea = () => {
  return (
    <DateAreaContainer>
      <div className="btn-wrap">
        <button className="dateCtrlBtn">
          <AiOutlineArrowLeft />
        </button>
      </div>
      <div className="dateText-wrap">
        <span className="dateText">{dayjs().format("MM월 DD일")}</span>
      </div>
      <div className="btn-wrap">
        <button className="dateCtrlBtn">
          <AiOutlineArrowRight />
        </button>
      </div>
    </DateAreaContainer>
  );
};

export default DateArea;
