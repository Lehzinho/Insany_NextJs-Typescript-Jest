import React from "react";
import * as S from "./styles";
import { LuShoppingCart } from "react-icons/lu";

const Button = () => {
  return (
    <S.Button>
      <LuShoppingCart size={24} />
      Adicionar
    </S.Button>
  );
};

export default Button;
