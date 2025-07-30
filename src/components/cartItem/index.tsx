import Image from "next/image";
import { IoTrashOutline } from "react-icons/io5";

import * as S from "./styles";
const CartItem = () => {
  return (
    <S.CartItemContainer>
      <Image
        src="https://images.unsplash.com/photo-1605714196241-00bf7a8fe7bb?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="teste"
        width={256}
        height={211}
      />
      <S.CartItemInformation>
        <div>
          <h3>Caneca de cerâmica rústica</h3>
          <IoTrashOutline size={24} />
        </div>
        <p>
          Aqui vem um texto descritivo do produto, esta caixa de texto servirá
          apenas de exemplo para que simule algum texto que venha a ser inserido
          nesse campo, descrevendo tal produto.
        </p>
        <div>
          <p>1</p>
          <p>R$ 40,00</p>
        </div>
      </S.CartItemInformation>
    </S.CartItemContainer>
  );
};

export default CartItem;
