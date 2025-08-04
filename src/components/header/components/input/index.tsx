import { IoSearchOutline } from "react-icons/io5";

import { addPagination, addProducts } from "@/redux/products/slice";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useDispatch } from "react-redux";
import * as S from "./styles";

const Input = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  async function handleSearchItem(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" || value.length <= 1 || value.length >= 3) {
      try {
        const response = await fetch(
          `https://api.insany.co/api/products?search=${value}&page=1&limit=6`
        );
        const products = await response.json();
        dispatch(addProducts(products.products));
        dispatch(addPagination(products.pagination));
      } catch (error) {
        console.log(error);
      }
    }
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <S.InputContainer>
      <input
        type="text"
        value={value}
        placeholder="Procurando por algo específico?"
        onChange={(e) => handleInputChange(e)}
        onKeyDown={(e) => handleSearchItem(e)}
      />
      <IoSearchOutline size={24} />
    </S.InputContainer>
  );
};

export default Input;
