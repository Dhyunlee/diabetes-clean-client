import { ContentsItem, ContentsList } from "components/Memo/styles";
import { IDiabetesInfo } from "models/db";
import DiabetesItem from "../DiabetesItem";

interface IProps {
  diabetesInfo?: IDiabetesInfo[];
}
const Diabetes = ({ diabetesInfo }: IProps) => {
  return (
    <div className="contents-container">
      <ContentsList>
        {diabetesInfo?.length ? (
          diabetesInfo.map((info) => {
            return <DiabetesItem key={info._id} {...info}/>;
          })
        ) : (
          <ContentsItem>기록한 내역이 없습니다.</ContentsItem>
        )}
      </ContentsList>
    </div>
  );
};

export default Diabetes;
