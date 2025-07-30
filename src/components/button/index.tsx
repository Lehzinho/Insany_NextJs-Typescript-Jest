import { LuShoppingCart } from "react-icons/lu";
import * as S from "./styles";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: boolean;
  color?: "Black" | "Green";
}

const Button = ({
  text,
  icon = false,
  color = "Black",
  ...props
}: ButtonProps) => {
  return (
    <S.Button $color={color} {...props}>
      {icon && <LuShoppingCart size={24} />}
      {text}
    </S.Button>
  );
};

export default Button;
