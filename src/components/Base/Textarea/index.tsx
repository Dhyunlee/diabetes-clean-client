import { forwardRef, ForwardedRef, DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import { TextareaInterface } from "./styles";
import { useAutoSizeTextArea } from "hooks/common/useAutoSizeTextArea";

type commonTextAreaProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

const Textarea = ({ value, ...rest }: commonTextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
  const textArea = ref as React.RefObject<HTMLTextAreaElement>;
  useAutoSizeTextArea(textArea?.current, value as string);
  return <TextareaInterface ref={ref} {...rest} />;
};

export default forwardRef(Textarea);
