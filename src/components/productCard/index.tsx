import Image from "next/image";
import React from "react";
import { LuShoppingCart } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import * as S from "./styles";

const ProductCard = () => {
  return (
    <S.CardContainer>
      <Image
        src={
          "https://comprarcuecas.com.br/cdn/shop/files/6a8d6b7ee4f0e5c2c5de8e1bb8dd1a80.jpg"
        }
        width={356}
        height={270}
        alt="camiseta"
      />
      <div>
        <S.RatingContainer>
          <p>Roupas e Calçados</p>
          <p>
            <FaStar size={14} />
            4.4
          </p>
        </S.RatingContainer>
        <S.InfoContainer>
          <h3>Camiseta Básica Premium</h3>
          <p>Camisa 100% algodão com corte moderno e acabamento premium...</p>
        </S.InfoContainer>
        <S.PriceContainer>
          <p>R$ 89,99</p>
          <p>50 em estoque</p>
        </S.PriceContainer>
        <S.Button>
          <LuShoppingCart size={24} />
          Adicionar
        </S.Button>
      </div>
    </S.CardContainer>
  );
};

export default ProductCard;
