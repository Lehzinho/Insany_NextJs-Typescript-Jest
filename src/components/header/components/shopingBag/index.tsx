import React from "react";
import Image from "next/image";
import * as S from "./styles";
import shopingBag from "@/assets/icons/shopingBag.svg";

const ShopingBag = () => {
  return (
    <S.Container>
      <Image src={shopingBag} width={24} height={24} alt="shoping bag" />
      <p>2</p>
    </S.Container>
  );
};

export default ShopingBag;
