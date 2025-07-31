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
      {products.length > 0 ? (
        <>
          <div>
            {products.map((prod) => (
              <ProductCard key={prod.id} {...prod} />
            ))}
          </div>
          <Pagination {...pagination} />
        </>
      ) : (
        <S.NenhumProduto>
          <h1>Nenhum Produto encontrado</h1>
        </S.NenhumProduto>
      )}
    </S.ProductsContainer>
  );
};

export default Products;
