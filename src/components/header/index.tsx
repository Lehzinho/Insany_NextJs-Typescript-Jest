import React from "react";
import Container from "../container";
import * as S from "./styles";
import Input from "./components/input";
import ShopingBag from "./components/shopingBag";

const Header = () => {
  return (
    <S.Header>
      <Container>
        <S.MainSection>
          <h1>InsanyShop</h1>
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
