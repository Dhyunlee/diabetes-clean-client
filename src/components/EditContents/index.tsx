import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { EditBody } from "components/EditMemo/styles";
import { EditHeader } from "components/EditMemo/styles";
import ImageUpload from "components/EditContents/ImageUpload";
import { useCreateContentsMutation } from "hooks/services/mutations";
import { userState } from "store/userState";
import { Container } from "styles/common";
import {
  ButtonGroup,
  FormWrap,
  InputGroup,
  TextareaGroup,
} from "components/EditMemo/FormDiabetes/styles";
import { ROUTER_PATH } from "constants/router_path";

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
  const onSubmitContent = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(content);
    const insertData = {
      writer: userId,
      content,
      imageName,
      imageUrl,
    };
    mutation.mutate(insertData);
    navigate(STORY, { replace: true });
  };
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
              <button type="reset" onClick={() => navigate(-1)}>
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
