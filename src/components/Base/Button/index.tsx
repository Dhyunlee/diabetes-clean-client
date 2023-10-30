import { DetailedHTMLProps, ButtonHTMLAttributes, FC } from "react";
import { ButtonInterface } from "./style";

type commonButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface customType {
  text: string;
  posX?: string | number;
  posY?: string | number;
  size?: string | number;
}

const Button: FC<customType & commonButtonProps> = ({ text, ...rest }) => {
  return <ButtonInterface {...rest}>{text}</ButtonInterface>;
};

export default Button;
