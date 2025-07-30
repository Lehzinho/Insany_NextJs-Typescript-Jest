import Image from "next/image";
import React from "react";
import { LuShoppingCart } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import * as S from "./styles";
import { ProductProps } from "@/model/products";
import Link from "next/link";
import Button from "@/components/button";
import { useDispatch } from "react-redux";
import { addShoppingCartItem } from "@/redux/shopingCart/slice";

const ProductCard = (item: ProductProps) => {
  const dispach = useDispatch();

  function handleAddItem() {
    dispach(addShoppingCartItem(item));
  }

  return (
    <S.CardContainer>
      <Link href={`/product/${item.id}`}>
        <Image src={item.image} width={356} height={270} alt="camiseta" />
      </Link>
      <div>
        <S.RatingContainer>
          <p>{item.category}</p>
          <p>
            <FaStar size={14} />
            {item.rating}
          </p>
        </S.RatingContainer>
        <S.InfoContainer>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </S.InfoContainer>
        <S.PriceContainer>
          <p>R$ {item.price}</p>
          <p>{`${item.stock} em estoque`}</p>
        </S.PriceContainer>
        <Button text="Adicionar" onClick={handleAddItem} />
      </div>
    </S.CardContainer>
  );
};

export default ProductCard;
