import { HtmlHTMLAttributes, ReactNode } from "react";
import * as S from "./styles";

interface ContainerProps extends HtmlHTMLAttributes<HTMLElement> {
  children: ReactNode;
}

const Container = ({ children, ...props }: ContainerProps) => {
  return <S.Container {...props}>{children}</S.Container>;
};

export default Container;
