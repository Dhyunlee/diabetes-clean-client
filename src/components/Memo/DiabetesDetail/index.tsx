import React, {useCallback} from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { deleteDiabetes, getDiabetesFindById } from "utils/apis/diabetesApis";
import { DetailContainer, DetailModalContent, DetailModalHeader } from "../GlobalModal/styles";
import { BsFillTrash2Fill, BsPencilSquare } from "react-icons/bs";
import { timeIcons } from "libs/time-icons";
import dayjs from "dayjs";

interface Iprops {
  id: string
}

const DiabetesDetail = ({id}: Iprops) => {
  console.log({id})
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {data} = useQuery({
    queryKey: ['diabetes', id],
    queryFn: () => getDiabetesFindById(id),
    enabled: !!id,
  })

  const diabetes = data?.diabetesInfo;
;


  const iconData = timeIcons.find(({ itemIcons_desc }) =>
  diabetes?.slot?.includes(itemIcons_desc)
  );

  const useMutate = useMutation(deleteDiabetes, {
    onSuccess: () => {
      queryClient.invalidateQueries<string>(["diabetes"]);
      navigate("/", { replace: true });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onDelDiabetes = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (diabetes._id) {
        if (window.confirm("당수치 삭제")) {
          useMutate.mutate(diabetes._id);
          // closeModal();
        }
      }
    },
    [diabetes?._id, useMutate]
  );
  const onEditDiabetes = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      console.log("당수치 수정페이지로 이동");
    },
    []
  );

  return (
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
            {dayjs(diabetes?.createdAt).format("MM월 DD일 dddd")}
            &nbsp;
          </span>
          <span>({dayjs(diabetes?.createdAt).format("HH:mm")})</span>
        </span>
      </DetailModalHeader>
      <DetailModalContent>
        <div className="cnt-item sugar_level">
          <div className="left">
            <span className="icon">{iconData?.itemIcons_icon}</span>
            &nbsp;
            <span className="time">{diabetes?.slot}</span>
          </div>
          <div className="right">
            <span>{diabetes?.sugar_level}mg/dl</span>
          </div>
        </div>
        <div className="cnt-item note">
          <p>{diabetes?.note || "기록한 내용이 없습니다."}</p>
        </div>
      </DetailModalContent>
    </DetailContainer>
  );
};

export default DiabetesDetail;
