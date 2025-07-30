import React from "react";
import * as S from "./styles";
import ProductCard from "./productCard";
import Pagination from "./pagination";
import { useSelector } from "react-redux";
import { AppRootState } from "@/redux/store";

const Products = () => {
  const { products, pagination } = useSelector(
    (state: AppRootState) => state.products
  );
  return (
    <S.ProductsContainer>
      <div>
        {products.map((prod) => (
          <ProductCard key={prod.id} {...prod} />
        ))}
      </div>
      <Pagination {...pagination} />
    </S.ProductsContainer>
  );
};

export default Products;
