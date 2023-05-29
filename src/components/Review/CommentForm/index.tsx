import { useState, FormEvent, ChangeEvent } from "react";
import { CommentsFormContainer } from "./styles";
import Button from "components/Base/Button";
import Input from "components/Base/Input";
import { useRecoilValue } from "recoil";
import { userState } from "store/userState";
import { useCreateCommentMutation } from "hooks/services/mutations";

interface IProps {
  contentsId: string;
}

const CommentForm = ({ contentsId }: IProps) => {
  const { _id: userId } = useRecoilValue(userState);
  const [content, setContent] = useState("");
  const mutation = useCreateCommentMutation();
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (content) {
      const insertData = {
        writer: userId,
        contentsId,
        content,
      };
      mutation.mutate(insertData);
      setContent("");
    } else {
      alert("댓글을 입력해주세요!");
    }
  };

  return (
    <CommentsFormContainer>
      <div className="comments-form">
        <div className="input-wrap">
          <Input
            type={"text"}
            value={content}
            onChange={onChange}
            placeholder={"댓글 추가"}
          />
        </div>
        <Button onClick={onSubmit} text={"댓글 추가"} type={"submit"} />
      </div>
    </CommentsFormContainer>
  );
};

export default CommentForm;
