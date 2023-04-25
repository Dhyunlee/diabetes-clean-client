import Modal from "components/Base/Modal";
import { useRecoilValue } from "recoil";
import { modalState } from "store/modalState";
import { Container } from "styles/common";
import dayjs from "dayjs";
import { timeIcons } from "libs/time-icons";
import {
  DetailContainer,
  DetailModalContent,
  DetailModalHeader,
} from "./styles";
import { useModal } from "hooks/useModal";
import { BsFillTrash2Fill, BsPencilSquare } from "react-icons/bs";
import { useCallback } from "react";
interface IDetail {
  isOpenModal: boolean;
}

const MemoDetailModal = ({ isOpenModal }: IDetail) => {
  const { closeModal } = useModal();
  const modalValue = useRecoilValue(modalState);
  const iconData = timeIcons.find(({ itemIcons_desc }) =>
    modalValue.data?.slot?.includes(itemIcons_desc)
  );

  const onDelDiabetes = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      console.log("당수치 삭제");
    },
    []
  );
  const onEditDiabetes = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      console.log("당수치 수정페이지로 이동");
    },
    []
  );
  return (
    <Modal isOpenModal={isOpenModal}>
      <Container>
        <DetailContainer>
          <DetailModalHeader>
            <div className="btn_ctrl">
              <button
                onClick={onDelDiabetes}
                className="btn_icon"
                title="당수치 삭제"
              >
                <BsFillTrash2Fill color="#B29CA0" size={20} />
              </button>
              <button
                onClick={onEditDiabetes}
                className="btn_icon"
                title="당수치 수정"
              >
                <BsPencilSquare color="#B29CA0" size={20} />
              </button>
            </div>
            <span className="date">
              <span>
                {dayjs(modalValue.data?.createdAt).format("MM월 DD일 dddd")}
                &nbsp;
              </span>
              <span>({dayjs(modalValue.data?.createdAt).format("HH:mm")})</span>
            </span>
          </DetailModalHeader>
          <DetailModalContent>
            <div className="cnt-item sugar_level">
              <div className="left">
                <span className="icon">{iconData?.itemIcons_icon}</span>
                &nbsp;
                <span className="time">{modalValue.data?.slot}</span>
              </div>
              <div className="right">
                <span>{modalValue.data?.sugar_level}mg/dl</span>
              </div>
            </div>
            <div className="cnt-item note">
              <p>{modalValue.data?.note || "기록한 내용이 없습니다."}</p>
            </div>
          </DetailModalContent>
        </DetailContainer>
      </Container>
    </Modal>
  );
};

export default MemoDetailModal;
