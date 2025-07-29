import React from "react";
import { PaginationProps } from "@/model/pagination";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import * as S from "./styles";

const Pagination = ({
  currentPage,
  hasNextPage,
  hasPreviousPage,
  totalPages,
  totalProducts,
}: PaginationProps) => {
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
        <S.PaginationButton>
          <FaAngleRight size={16} />
        </S.PaginationButton>
      </div>
    </S.PaginationContainer>
  );
};

export default Pagination;
