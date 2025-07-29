import { GetServerSideProps } from "next";
import React from "react";

const Category = () => {
  return <main>Category</main>;
};

export default Category;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const name = params?.name as string;
  try {
    const response = await fetch(
      `http://api.insany.co/api/products?category=${name}`
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
