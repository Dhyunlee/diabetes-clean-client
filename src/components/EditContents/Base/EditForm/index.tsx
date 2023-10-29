import { Container } from "styles/common";
import { EditHeader, EditBody } from "./styles";
import ImageUpload from "components/EditContents/Base/ImageUpload";
import {
  ButtonGroup,
  FormWrap,
  InputGroup,
  TextareaGroup
} from "components/EditMemo/FormDiabetes/styles";

interface IProp {
  onSubmitContent: (e: React.FormEvent<HTMLFormElement>) => void;
  onChangeContent: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onCancal: () => void;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
  setimageName: React.Dispatch<React.SetStateAction<string>>;
}
const EditForm = ({
  onSubmitContent,
  onChangeContent,
  onCancal,
  setImageUrl,
  setimageName
}: IProp) => {
  return (
    <Container>
      <EditHeader>
        <div className="contents-title">
          <span>컨텐츠 작성하기</span>
        </div>
      </EditHeader>
      <EditBody>
        <FormWrap onSubmit={onSubmitContent}>
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
            <button type="submit">게시하기</button>
          </ButtonGroup>
        </FormWrap>
      </EditBody>
    </Container>
  );
};

export default EditForm;
