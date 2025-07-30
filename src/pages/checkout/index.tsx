import React from "react";
import * as S from "@/styles/pages/checkout.styles";
import BackButton from "@/components/backButton";
import Link from "next/link";
import Button from "@/components/button";
import CartItem from "@/components/cartItem";
const Checkout = () => {
  return (
    <S.CheckoutContainer>
      <S.CartContainer>
        <BackButton />
        <h1>SEU CARRINHO</h1>
        <p>
          Total (3 produtos) <span>R$ 161,00</span>
        </p>
        <S.ItemsContainer>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </S.ItemsContainer>
      </S.CartContainer>
      <S.OrderContainer>
        <div>
          <h1>RESUMO DO PEDIDO</h1>
          <ul>
            <li>
              <p>Subtotal de produtos</p>
              <p>R$ 161,00</p>
            </li>
            <li>
              <p>Entrega</p>
              <p>R$ 40,00</p>
            </li>
            <li>
              <div />
            </li>
            <li>
              <p>Total</p>
              <p>R$ 201,00</p>
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
