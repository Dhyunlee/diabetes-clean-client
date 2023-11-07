import dayjs from "dayjs";
import DiabetesDetail from "components/Memo/DiabetesDetail/index";
import { useModal } from "hooks/common/useModal";
import { timeIcons } from "libs/time-icons";
import { IDiabetesInfo } from "models/data";
import { DiabetesItemWrap, ItemBodyWrap } from "components/Memo/styles";
dayjs.locale("ko");

const DiabetesItem = ({ _id, sugar_level, slot }: IDiabetesInfo) => {
  const { openModal } = useModal();

  const iconData = timeIcons.find(({ itemIcons_desc }) =>
    slot?.includes(itemIcons_desc)
  );

  return (
    <DiabetesItemWrap
      key={_id}
      className={`${_id}`}
      onClick={() => {
        openModal({
          type: _id,
          isOpen: true,
          props: <DiabetesDetail id={_id} />
        });
      }}
    >
      <ItemBodyWrap>
        <div>
          <span className="item-icon">{iconData?.itemIcons_icon}</span>
          <span className="item-slot">{slot}</span>
        </div>
        <div>
          <div>{sugar_level}mg/dl</div>
        </div>
      </ItemBodyWrap>
    </DiabetesItemWrap>
  );
};

export default DiabetesItem;
