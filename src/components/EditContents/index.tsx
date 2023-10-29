import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "store/userState";
import { useModal } from "hooks/common/useModal";
import { useCreateContentsMutation } from "hooks/service/mutator";
import { ROUTER_PATH } from "constants/router_path";
import alertHandler, { alertMessage } from "utils/functions/alertHandler";
import EditForm from "components/EditContents/Base/EditForm";

const EditContents = () => {
  const { STORY } = ROUTER_PATH;
  const navigate = useNavigate();
  const mutation = useCreateContentsMutation();
  const { _id: userId } = useRecoilValue(userState);
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageName, setimageName] = useState("");

  const onChangeContent = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setContent(e.target.value);
    },
    []
  );

  const onCancal = useCallback(() => {
    alertHandler
      .onConfirm({
        icon: "warning",
        html: (
          <p>
            페이지를 떠나면 기록한 내용이 모두 없어집니다.
            <br />
            그래도 떠나시겠습니까?
          </p>
        )
      })
      .then((result) => {
        if (result.isConfirmed) {
          navigate(-1);
        } else if (result.isDismissed) {
          alertHandler.onToast({ msg: alertMessage.cancelMsg });
        }
      });
  }, [navigate]);

  const onSubmitContent = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(content);
      const insertData = {
        writer: userId,
        content,
        imageName,
        imageUrl
      };

      if (content !== "") {
        mutation.mutate(insertData);
        navigate(STORY, { replace: true });
      } else {
        alertHandler.onToast({ msg: "내용을 입력해주세요!", icon: "warning" });
      }
    },
    [STORY, content, imageName, imageUrl, mutation, navigate, userId]
  );

  return (
    <div className="form-wrap">
      <EditForm
        onCancal={onCancal}
        onChangeContent={onChangeContent}
        onSubmitContent={onSubmitContent}
        setImageUrl={setImageUrl}
        setimageName={setimageName}
      />
    </div>
  );
};

export default EditContents;
