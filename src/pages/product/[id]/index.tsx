import { ProductProps } from "@/model/products";
import { GetServerSideProps } from "next";
import Image from "next/image";

import BackButton from "@/components/backButton";
import Button from "@/components/button";
import { addShoppingCartItem } from "@/redux/shopingCart/slice";
import { useDispatch } from "react-redux";

import * as S from "@/styles/pages/product.styles";

interface ProdutosProps {
  product: ProductProps;
}
const Product = ({ product }: ProdutosProps) => {
  const dispach = useDispatch();

  function handleAddItem() {
    dispach(addShoppingCartItem(product));
  }
  return (
    <S.ProductContainer>
      <BackButton />
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
          <Button text="Adicionar" onClick={handleAddItem} />
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
