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
import { useMutation, useQueryClient } from "react-query";
import { deleteDiabetes } from "utils/apis/diabetesApis";
import { useNavigate } from "react-router-dom";
interface IDetail {
  isOpenModal: boolean;
}

const MemoDetailModal = ({ isOpenModal }: IDetail) => {
  const { closeModal } = useModal();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const useMutate = useMutation(deleteDiabetes, {
    onSuccess: () => {
      queryClient.invalidateQueries<string>(["diabetes"]);
      navigate("/", { replace: true });
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const modalValue = useRecoilValue(modalState);
  const diabetesId = modalValue.data?._id;
  const iconData = timeIcons.find(({ itemIcons_desc }) =>
    modalValue.data?.slot?.includes(itemIcons_desc)
  );

  const onDelDiabetes = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (diabetesId) {
        if (window.confirm("당수치 삭제")) {
          useMutate.mutate(diabetesId);
          closeModal();
        }
      }
    },
    [closeModal, diabetesId, useMutate]
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
