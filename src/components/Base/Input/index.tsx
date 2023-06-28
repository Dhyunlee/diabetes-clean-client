import {
  DetailedHTMLProps,
  FunctionComponent,
  InputHTMLAttributes
} from "react";
import { InputInterface } from "./styles";

type commonInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input: FunctionComponent<commonInputProps> = ({ ...rest }) => {
  return <InputInterface {...rest} />;
};

export default Input;
