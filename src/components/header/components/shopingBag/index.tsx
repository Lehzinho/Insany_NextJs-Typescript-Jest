import shopingBag from "@/assets/icons/shopingBag.svg";
import Image from "next/image";
import * as S from "./styles";
import { useSelector } from "react-redux";
import { AppRootState } from "@/redux/store";

const ShopingBag = () => {
  const { shoppingCart } = useSelector(
    (state: AppRootState) => state.shopingCart
  );
  return (
    <S.Container>
      <Image src={shopingBag} width={24} height={24} alt="shoping bag" />
      <p>{shoppingCart.length}</p>
    </S.Container>
  );
};

export default ShopingBag;
