import { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "store/userState";
import { useCreateContentsMutation } from "hooks/service/mutator";
import ImageUpload from "components/EditContents/ImageUpload";
import { EditBody } from "components/EditMemo/styles";
import { EditHeader } from "components/EditMemo/styles";
import { Container } from "styles/common";
import {
  ButtonGroup,
  FormWrap,
  InputGroup,
  TextareaGroup
} from "components/EditMemo/FormDiabetes/styles";
import { ROUTER_PATH } from "constants/router_path";
import alertHandler, { alertMessage } from "utils/functions/alertHandler";
import { useModal } from "hooks/common/useModal";

const EditContents = () => {
  const { STORY } = ROUTER_PATH;
  const { closeModal } = useModal();
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
          closeModal();
        } else if (result.isDismissed) {
          alertHandler.onToast({ msg: alertMessage.cancelMsg });
          closeModal();
        }
      });
  }, [closeModal, navigate]);

  const onSubmitContent = useCallback(() => {
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
  }, [STORY, content, imageName, imageUrl, mutation, navigate, userId]);

  return (
    <div>
      <Container>
        <EditHeader>
          <div className="memo-title" style={{ padding: 0 }}>
            <span>컨텐츠 작성하기</span>
          </div>
        </EditHeader>
        <EditBody>
          <FormWrap style={{ padding: 0 }}>
            <TextareaGroup>
              <textarea
                placeholder="당신의 이야기를 들려주세요"
                onChange={onChangeContent}
              />
            </TextareaGroup>
            <InputGroup style={{ position: "relative" }}>
              <ImageUpload
                setImgUrl={setImageUrl}
                setImgFileName={setimageName}
              />
            </InputGroup>
            <ButtonGroup>
              <button type="reset" onClick={onCancal}>
                취소하기
              </button>
              <button type="submit" onClick={onSubmitContent}>
                게시하기
              </button>
            </ButtonGroup>
          </FormWrap>
        </EditBody>
      </Container>
    </div>
  );
};

export default EditContents;
