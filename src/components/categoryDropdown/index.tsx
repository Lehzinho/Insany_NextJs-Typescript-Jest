import React, { ReactNode, useEffect, useRef, useState } from "react";

import * as S from "./styles";
import { FaAngleDown } from "react-icons/fa";

interface CategoryDropdownProps {
  children: ReactNode;
  title: string;
}

const CategoryDropdown = ({ children, title }: CategoryDropdownProps) => {
  const dropDownRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        setActive(false);
      }
    }

    if (active) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [active]);
  return (
    <S.CategoryDropdownContainer>
      <button onClick={() => setActive((prev) => !prev)}>
        {title}
        <FaAngleDown />
      </button>
      <S.DropdownContainer
        $active={active}
        onClick={() => setActive((prev) => !prev)}
        ref={dropDownRef}
      >
        {children}
      </S.DropdownContainer>
    </S.CategoryDropdownContainer>
  );
};

export default CategoryDropdown;
