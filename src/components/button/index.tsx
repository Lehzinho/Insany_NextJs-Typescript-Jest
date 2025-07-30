import { LuShoppingCart } from "react-icons/lu";
import * as S from "./styles";

const Button = () => {
  return (
    <S.Button>
      <LuShoppingCart size={24} />
      Adicionar
    </S.Button>
  );
};

export default Button;
