import Image from "next/image";
import { IoTrashOutline } from "react-icons/io5";

import * as S from "./styles";
import { CartItemProps as ItemProps } from "@/model/cartItem";
import { useDispatch } from "react-redux";
import { removeShoppingCartItem } from "@/redux/shopingCart/slice";

interface CartItemProps {
  item: ItemProps;
}

const CartItem = ({ item }: CartItemProps) => {
  const dispatch = useDispatch();

  function handleRemoveItem() {
    dispatch(removeShoppingCartItem(item.id));
  }
  return (
    <S.CartItemContainer>
      <Image src={item.image} alt="teste" width={256} height={211} />
      <S.CartItemInformation>
        <div>
          <h3>{item.name}</h3>
          <button onClick={handleRemoveItem}>
            <IoTrashOutline size={24} />
          </button>
        </div>
        <p>{item.description}</p>
        <div>
          <p>{item.quantity}</p>
          <p>R$ {item.quantity * item.price}</p>
        </div>
      </S.CartItemInformation>
    </S.CartItemContainer>
  );
};

export default CartItem;
