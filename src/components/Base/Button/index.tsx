import { FunctionComponent, MouseEvent } from "react";
import { ButtonInterface } from "./style";

interface inputType {
  text: string;
  type?: "button" | "reset" | "submit";
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FunctionComponent<inputType> = ({
  text,
  type,
  onClick,
}) => {
  return (
    <ButtonInterface value={text} type={type} onClick={onClick}>
      {text}
    </ButtonInterface>
  );
};

export default Button;
