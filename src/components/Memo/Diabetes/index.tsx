import dayjs from "dayjs";

import {
  ContentsItem,
  ContentsItemBody,
  ContentsItemHeader,
  ContentsList,
} from "pages/Memo/styles";
import { IDiabetes } from "typings/db";

dayjs.locale("ko");

interface IProps {
  diabetesData?: Array<IDiabetes>;
}

const Diabetes = ({ diabetesData }: IProps) => {
  return (
    <div className="contents-container">
      <ContentsList>
        {diabetesData &&
          diabetesData.map(({ _id, GI, createdAt, slot }) => (
            <ContentsItem key={_id}>
              <ContentsItemHeader className="contents-header">
                <span className="date">
                  <span>{dayjs(createdAt).format("MM월 DD일 dddd")}</span>
                  <span>({dayjs(createdAt).format("h:mm A")})</span>
                </span>
              </ContentsItemHeader>
              <ContentsItemBody className="contents-body">
                <div className="cnt-item content_body-header">
                  <div className="item item-title">{slot}</div>
                </div>
                <div className="cnt-item content_body-inner">
                  <div>{GI}mg/dl</div>
                </div>
              </ContentsItemBody>
            </ContentsItem>
          ))}
      </ContentsList>
    </div>
  );
};

export default Diabetes;
