import { useModal } from "hooks/useModal";
import { timeIcons } from "libs/time-icons";
import { IDiabetesInfo } from "models/db";
import dayjs from "dayjs";
import {
  ContentsItem,
  ContentsItemBody,
  ContentsItemHeader,
} from "components/Memo/styles";
dayjs.locale("ko");

const DiabetesItem = ({ _id, sugar_level, slot, createdAt, note }: IDiabetesInfo) => {
  const { openModal } = useModal();

  const iconData = timeIcons.find(({ itemIcons_desc }) =>
    slot?.includes(itemIcons_desc)
  );
  return (
    <ContentsItem
      key={_id}
      className={`${_id}`}
      onClick={(e) => {
        openModal({
          type: _id,
          isOpen: true,
          data: { _id, sugar_level, slot, createdAt, note },
        });
      }}
    >
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
};

export default DiabetesItem;
