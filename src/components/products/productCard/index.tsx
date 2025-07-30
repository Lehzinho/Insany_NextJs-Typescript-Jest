import Image from "next/image";
import React from "react";
import { LuShoppingCart } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import * as S from "./styles";
import { ProductProps } from "@/model/products";
import Link from "next/link";
import Button from "@/components/button";

const ProductCard = ({
  id,
  image,
  name,
  price,
  brand,
  category,
  description,
  rating,
  stock,
}: ProductProps) => {
  return (
    <S.CardContainer>
      <Link href={`/product/${id}`}>
        <Image src={image} width={356} height={270} alt="camiseta" />
      </Link>
      <div>
        <S.RatingContainer>
          <p>{category}</p>
          <p>
            <FaStar size={14} />
            {rating}
          </p>
        </S.RatingContainer>
        <S.InfoContainer>
          <h3>{name}</h3>
          <p>{description}</p>
        </S.InfoContainer>
        <S.PriceContainer>
          <p>R$ {price}</p>
          <p>{`${stock} em estoque`}</p>
        </S.PriceContainer>
        <Button />
      </div>
    </S.CardContainer>
  );
};

export default ProductCard;
