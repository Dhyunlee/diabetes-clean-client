import dayjs from "dayjs";

import {
  ContentsItem,
  ContentsItemBody,
  ContentsItemHeader,
  ContentsList,
} from "pages/Memo/styles";

dayjs.locale("ko");

const Diabetes = ({ diabetes, handleShowModal }: any) => {
  return (
    <div className="contents-container">
      <ContentsList>
        <ContentsItem>
          <ContentsItemHeader className="contents-header">
            <span className="date">
              <span>{dayjs().format("MM월 DD일 dddd")}</span>
              <span>({dayjs().format("h:mm A")})</span>
            </span>
          </ContentsItemHeader>
          <ContentsItemBody className="contents-body">
            <div className="cnt-item content_body-header">
              <div className="item item-title">아침</div>
            </div>
            <div className="cnt-item content_body-inner">
              <div>110mg/dl</div>
            </div>
          </ContentsItemBody>
        </ContentsItem>
      </ContentsList>
    </div>
  );
};

export default Diabetes;
