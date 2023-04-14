import dayjs from "dayjs";
import {
  ContentsItem,
  ContentsItemBody,
  ContentsItemHeader,
  ContentsList,
} from "components/Memo/MemoList/styles";
import { timeIcons } from "libs/time-icons";
import { IDiabetesInfo } from "models/db";

dayjs.locale("ko");

interface IProps {
  diabetesInfo?: IDiabetesInfo[]
}
const Diabetes = ({ diabetesInfo }: IProps) => {
  return (
    <div className="contents-container">
      <ContentsList>
        {diabetesInfo?.length ? (
          diabetesInfo.map(({ _id, sugar_level, slot, createdAt }) => {
            const iconData = timeIcons.find(({ itemIcons_desc }) => slot?.includes(itemIcons_desc));
            return (
              <ContentsItem key={_id}>
                <ContentsItemHeader className="contents-header">
                  <span className="date">
                    <span>{dayjs(createdAt).format("MM월 DD일 dddd")}</span>
                    <span>({dayjs(createdAt).format("HH:mm")})</span>
                  </span>
                </ContentsItemHeader>
                <ContentsItemBody className="contents-body">
                  <div className="cnt-item content_body-header">
                    <div className="item item-icon">{iconData?.itemIcons_icon}</div>
                    <div className="item item-title">{slot}</div>
                  </div>
                  <div className="cnt-item content_body-inner">
                    <div>{sugar_level}mg/dl</div>
                  </div>
                </ContentsItemBody>
              </ContentsItem>
            );
          })
        ) : (
          <ContentsItem>기록한 내역이 없습니다.</ContentsItem>
        )}
      </ContentsList>
    </div>
  );
};

export default Diabetes;
