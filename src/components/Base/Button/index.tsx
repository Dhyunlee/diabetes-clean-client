import {
  DetailedHTMLProps,
  FunctionComponent,
  MouseEvent,
  ButtonHTMLAttributes,
} from "react";
import { ButtonInterface } from "./style";
import { SerializedStyles } from "@emotion/react";

type commonInputProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface inputType {
  text: string;
  type?: "button" | "reset" | "submit";
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FunctionComponent<inputType & commonInputProps> = ({
  text,
  ...rest
}) => {
  return <ButtonInterface {...rest}>{text}</ButtonInterface>;
};

export default Button;
