import shopingBag from "@/assets/icons/shopingBag.svg";
import Image from "next/image";
import * as S from "./styles";

const ShopingBag = () => {
  return (
    <S.Container>
      <Image src={shopingBag} width={24} height={24} alt="shoping bag" />
      <p>2</p>
    </S.Container>
  );
};

export default ShopingBag;
