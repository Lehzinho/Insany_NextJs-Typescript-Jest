import { ProductProps } from "@/model/products";
import { GetServerSideProps } from "next";
import Image from "next/image";
import React from "react";

import * as S from "./product.styles";
import { useRouter } from "next/router";

import back from "@/assets/icons/back.svg";
import Button from "@/components/button";

interface ProdutosProps {
  product: ProductProps;
}
const Product = ({ product }: ProdutosProps) => {
  const router = useRouter();
  return (
    <S.ProductContainer>
      <button onClick={() => router.back()}>
        <p>
          <Image src={back} width={24} height={24} alt="Back button" />
          Voltar
        </p>
      </button>
      <S.Product>
        <Image
          src={product.image}
          alt={product.description}
          width={580}
          height={580}
        />
        <div>
          <S.ProductHeader>
            <p>{product.category}</p>
            <h2>{product.name}</h2>
            <p>{`R$ ${product.price}`}</p>
          </S.ProductHeader>
          <S.ProductInformation>
            <h3>DESCRIÇÃO</h3>
            <p>{product.description}</p>
          </S.ProductInformation>
          <Button />
        </div>
      </S.Product>
    </S.ProductContainer>
  );
};

export default Product;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id as string;
  try {
    const response = await fetch(`http://api.insany.co/api/products/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const product = await response.json();

    return {
      props: product,
    };
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return {
      props: null,
    };
  }
};
