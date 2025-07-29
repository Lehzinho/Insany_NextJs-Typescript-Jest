import React from "react";
import { IoSearchOutline } from "react-icons/io5";

import * as S from "./styles";

const Input = () => {
  return (
    <S.InputContainer>
      <input type="text" placeholder="Procurando por algo específico?" />
      <IoSearchOutline size={24} />
    </S.InputContainer>
  );
};

export default Input;
