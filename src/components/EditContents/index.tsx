import Input from "components/Base/Input";
import { EditBody } from "components/EditMemo/styles";
import { EditHeader } from "components/EditMemo/styles";
import { Container } from "styles/common";
import {
  ButtonGroup,
  FormWrap,
  InputGroup,
  InputWrap,
  LabelWrap,
  TextareaGroup,
} from "components/EditMemo/FormDiabetes/styles";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageUpload from "./ImageUpload";
import { useRecoilValue } from "recoil";
import { userState } from "store/userState";

const EditContents = () => {
  const { _id: userId } = useRecoilValue(userState);
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [imgFileName, setImgFileName] = useState("");
  
  const onChangeContent = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }, []);
  const onSubmitContent = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(content)

    
  };
  return (
    <div>
      <Container>
        <EditHeader>
          <div className="memo-title" style={{padding: 0}}>
            <span>컨텐츠 작성하기</span>
          </div>
        </EditHeader>
        <EditBody>
          <FormWrap style={{padding: 0}}>
            <TextareaGroup>
              <textarea
                placeholder="당신의 이야기를 들려주세요"
                onChange={onChangeContent}
              />
            </TextareaGroup>
            <InputGroup style={{ position: "relative" }}>
              <ImageUpload
                setImgUrl={setImgUrl}
                setImgFileName={setImgFileName}
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
