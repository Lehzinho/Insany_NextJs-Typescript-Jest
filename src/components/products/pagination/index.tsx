import React from "react";
import { PaginationProps } from "@/model/pagination";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import * as S from "./styles";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const Pagination = ({
  currentPage,
  hasNextPage,
  hasPreviousPage,
  totalPages,
  totalProducts,
}: PaginationProps) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { name } = router.query;

  async function handleChangePage() {
    const response = await fetch(`http://api.insany.co/api/products`);

    const products = await response.json();
    console.log(products);
    //dispatch(addProducts(products));
  }

  return (
    <S.PaginationContainer>
      <div>
        <S.PaginationButton>
          <FaAngleLeft size={16} />
        </S.PaginationButton>
        {Array.from({ length: totalPages }).map((_, index) => (
          <S.PaginationButton key={index} $active={currentPage - 1 === index}>
            {index + 1}
          </S.PaginationButton>
        ))}
        <S.PaginationButton onClick={handleChangePage}>
          <FaAngleRight size={16} />
        </S.PaginationButton>
      </div>
    </S.PaginationContainer>
  );
};

export default Pagination;
