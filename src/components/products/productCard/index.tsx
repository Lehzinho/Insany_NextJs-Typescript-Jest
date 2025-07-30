import Button from "@/components/button";
import { ProductProps } from "@/model/products";
import { addSelectedCategory } from "@/redux/categories/slice";
import { addShoppingCartItem } from "@/redux/shopingCart/slice";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";

import * as S from "./styles";

const ProductCard = (item: ProductProps) => {
  const dispatch = useDispatch();

  function handleAddItem() {
    dispatch(addShoppingCartItem(item));
  }

  function handleChangeCategory() {
    dispatch(addSelectedCategory(item.category));
  }

  return (
    <S.CardContainer>
      <Link href={`/product/${item.id}`}>
        <Image src={item.image} width={356} height={270} alt="camiseta" />
      </Link>
      <div>
        <S.RatingContainer>
          <Link
            href={`/category/${item.category}`}
            onClick={handleChangeCategory}
          >
            <p>{item.category}</p>
          </Link>
          <p>
            <FaStar size={14} />
            {item.rating}
          </p>
        </S.RatingContainer>
        <S.InfoContainer>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </S.InfoContainer>
        <S.PriceContainer>
          <p>R$ {item.price}</p>
          <p>{`${item.stock} em estoque`}</p>
        </S.PriceContainer>
        <Button text="Adicionar" onClick={handleAddItem} />
      </div>
    </S.CardContainer>
  );
};

export default ProductCard;
