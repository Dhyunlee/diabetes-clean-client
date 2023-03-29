import { InputInterface } from "./styles";

interface inputType {
  text: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  text = "text",
  type,
  placeholder,
  onChange,
}: inputType) => {
  return (
    <InputInterface
      onChange={onChange}
      value={text}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;