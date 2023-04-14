import { useState, FormEvent, ChangeEvent } from "react";
import { CommentsFormContainer } from "./styles";
import Button from "components/Base/Button";
import Input from "components/Base/Input";

const CommentForm = () => {
  const [comment, setComment] = useState("");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
     e.preventDefault()
     console.log(comment)
  }

  return (
    <CommentsFormContainer>
      <form onSubmit={onSubmit}>
        <div className="inputWrap">
          <Input type={"text"} value={comment} onChange={onChange} placeholder={"댓글 추가"} />
        </div>
        <div className="btnCtrl">
          <Button text={"댓글 추가"} type={"submit"} />
        </div>
      </form>
    </CommentsFormContainer>
  );
};

export default CommentForm;
