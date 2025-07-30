import BackButton from "@/components/backButton";
import Button from "@/components/button";
import CartItem from "@/components/cartItem";
import { AppRootState } from "@/redux/store";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import { CartItemProps } from "@/model/cartItem";
import { updateShoppingCartItem } from "@/redux/shopingCart/slice";
import { getShopingItems } from "@/storage";
import { useEffect } from "react";

import * as S from "@/styles/pages/checkout.styles";

const Checkout = () => {
  const { shoppingCart, totalPrice } = useSelector(
    (state: AppRootState) => state.shopingCart
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateShoppingCartItem(getShopingItems()));
  }, []);

  const entrega = 40;

  return (
    <S.CheckoutContainer>
      <S.CartContainer>
        <BackButton />
        <h1>SEU CARRINHO</h1>
        <p>
          Total ({shoppingCart.length}{" "}
          {shoppingCart.length > 1 ? "produtos" : "produto"}){" "}
          <span>R$ {totalPrice}</span>
        </p>
        <S.ItemsContainer>
          {shoppingCart.length === 0 && (
            <div>
              <p>Seu carrinho está vazio!</p>
              <Link href={"/"}>Clique aqui para começar suas compras.</Link>
            </div>
          )}
          {shoppingCart.map((item: CartItemProps) => (
            <CartItem key={item.id} item={item} />
          ))}
        </S.ItemsContainer>
      </S.CartContainer>
      <S.OrderContainer>
        <div>
          <h1>RESUMO DO PEDIDO</h1>
          <ul>
            <li>
              <p>Subtotal de produtos</p>
              <p>R$ {totalPrice}</p>
            </li>
            <li>
              <p>Entrega</p>
              <p>R$ {entrega},00</p>
            </li>
            <li>
              <div />
            </li>
            <li>
              <p>Total</p>
              <p>R$ {totalPrice + entrega}</p>
            </li>
          </ul>
          <Button text="FINALIZAR A COMPRA" icon={false} color="Green" />
        </div>
        <div>
          <Link href={"#"}>Ajuda</Link>
          <Link href={"#"}>reembolsos</Link>
          <Link href={"#"}>entregas e frete</Link>
          <Link href={"#"}>trocas e devoluções</Link>
        </div>
      </S.OrderContainer>
    </S.CheckoutContainer>
  );
};

export default Checkout;
