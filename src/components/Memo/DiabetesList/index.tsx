import DiabetesItem from "components/Memo/DiabetesItem";
import { IDiabetesInfo } from "models/db";
import { ContentsItem, ContentsList } from "components/Memo/styles";

interface IProps {
  diabetesInfo?: IDiabetesInfo[];
}
const DiabetesList = ({ diabetesInfo }: IProps) => {
  return (
    <div className="contents-container">
      <ContentsList>
        {diabetesInfo?.length ? (
          diabetesInfo.map((info) => {
            return <DiabetesItem key={info._id} {...info} />;
          })
        ) : (
          <ContentsItem>기록한 내역이 없습니다.</ContentsItem>
        )}
      </ContentsList>
    </div>
  );
};

export default DiabetesList;
