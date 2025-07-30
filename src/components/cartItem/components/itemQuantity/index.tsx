import React, { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

import * as S from "./styles";
import { useDispatch } from "react-redux";
import { updateItemQuantity } from "@/redux/shopingCart/slice";

interface ItemQuantityProps {
  quantity: number;
  stock: number;
  id: number;
}

const ItemQuantity = ({ id, quantity, stock }: ItemQuantityProps) => {
  const dispatch = useDispatch();
  const dropDownRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  function handleChangeQuantity(quantity: number) {
    dispatch(updateItemQuantity({ id, quantity }));
    setActive((prev) => !prev);
  }
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        setActive(false);
      }
    }

    // Adiciona o event listener apenas quando o dropdown está ativo
    if (active) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup: remove o event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [active]);

  return (
    <S.ItemQuantityContainer>
      <button onClick={() => setActive((prev) => !prev)}>
        <p>{quantity}</p>
        <FaAngleDown size={16} />
      </button>
      <S.ItemDropDown $active={active} ref={dropDownRef}>
        {Array.from({ length: stock }).map((_, index) => (
          <p onClick={() => handleChangeQuantity(index + 1)}>{index + 1}</p>
        ))}
      </S.ItemDropDown>
    </S.ItemQuantityContainer>
  );
};

export default ItemQuantity;
