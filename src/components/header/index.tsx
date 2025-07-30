import React from "react";
import Container from "../container";
import * as S from "./styles";
import Input from "./components/input";
import ShopingBag from "./components/shopingBag";
import Link from "next/link";

const Header = () => {
  return (
    <S.Header>
      <Container>
        <S.MainSection>
          <Link href={"/"}>
            <h1>InsanyShop</h1>
          </Link>
          <div>
            <Input />
            <ShopingBag />
          </div>
        </S.MainSection>
      </Container>
    </S.Header>
  );
};

export default Header;
