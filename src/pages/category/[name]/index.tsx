import React, { useEffect } from "react";
import Products from "@/components/products";
import { PaginationProps } from "@/model/pagination";
import { ProductProps } from "@/model/products";
import { addPagination, addProducts } from "@/redux/products/slice";
import { GetServerSideProps } from "next";
import { useDispatch, useSelector } from "react-redux";

import * as S from "./category.styles";
import { AppRootState } from "@/redux/store";

interface CategoryProps {
  products: {
    products: ProductProps[];
    pagination: PaginationProps;
  };
}

const Category = ({ products }: CategoryProps) => {
  const { selectedCategory } = useSelector(
    (state: AppRootState) => state.categories
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addProducts(products.products));
    dispatch(addPagination(products.pagination));
  }, []);

  return (
    <S.CategoryContainer>
      <S.ContainerHeader>
        <p>Produtos/{selectedCategory?.name ?? ""}</p>
        <p>Organizar por </p>
      </S.ContainerHeader>
      <section>
        <S.ContainerTitle>
          <h1>{selectedCategory?.name ?? ""}</h1>
          <p>{selectedCategory?.description ?? ""}</p>
        </S.ContainerTitle>
        <Products />
      </section>
    </S.CategoryContainer>
  );
};

export default Category;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const name = params?.name as string;
  try {
    const response = await fetch(
      `http://api.insany.co/api/products?category=${name}&page=1&limit=6`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const products = await response.json();

    const props = { products };

    return {
      props: props,
    };
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return {
      props: {
        products: [],
      },
    };
  }
};
