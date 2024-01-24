import { forwardRef } from "react";
import { InputContainer, InputBox, InputElement, Label } from "./Input.styled";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  isDisabled?: boolean;
  inputRef?: React.Ref<HTMLInputElement>;
  isRequired?: boolean;
  label: string;
}

const Input = ({
  isDisabled,
  isRequired,
  label,
  inputRef,
  ...rest
}: InputProps) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <InputBox>
        <InputElement
          {...rest}
          ref={inputRef}
          disabled={isDisabled}
          required={isRequired}
        />
      </InputBox>
    </InputContainer>
  );
};

export default forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <Input {...props} inputRef={ref} />
));
