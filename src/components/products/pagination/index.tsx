import React from "react";
import { PaginationProps } from "@/model/pagination";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import * as S from "./styles";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addPagination, addProducts } from "@/redux/products/slice";

const Pagination = ({
  currentPage,
  hasNextPage,
  hasPreviousPage,
  totalPages,
}: PaginationProps) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { name } = router.query;
  let url: string;
  if (name) {
    url = `https://api.insany.co/api/products?category=${name}&`;
  } else {
    url = "https://api.insany.co/api/products?";
  }

  async function handleChangePage(page: number) {
    try {
      const response = await fetch(`${url}&page=${page}&limit=6`);
      const products = await response.json();
      dispatch(addProducts(products.products));
      dispatch(addPagination(products.pagination));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <S.PaginationContainer>
      <div>
        <S.PaginationButton
          onClick={() => handleChangePage(currentPage - 1)}
          disabled={!hasPreviousPage}
        >
          <FaAngleLeft size={16} />
        </S.PaginationButton>
        {Array.from({ length: totalPages }).map((_, index) => (
          <S.PaginationButton
            key={index}
            $active={currentPage - 1 === index}
            onClick={() => handleChangePage(index + 1)}
          >
            {index + 1}
          </S.PaginationButton>
        ))}
        <S.PaginationButton
          onClick={() => handleChangePage(currentPage + 1)}
          disabled={!hasNextPage}
        >
          <FaAngleRight size={16} />
        </S.PaginationButton>
      </div>
    </S.PaginationContainer>
  );
};

export default Pagination;
