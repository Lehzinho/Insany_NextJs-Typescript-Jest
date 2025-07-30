import Link from "next/link";
import Container from "../container";
import Input from "./components/input";
import ShopingBag from "./components/shopingBag";
import * as S from "./styles";

const Header = () => {
  return (
    <S.Header>
      <Container style={{ marginTop: 0 }}>
        <S.MainSection>
          <Link href={"/"}>
            <h1>InsanyShop</h1>
          </Link>
          <div>
            <Input />
            <Link href={"/checkout"}>
              <ShopingBag />
            </Link>
          </div>
        </S.MainSection>
      </Container>
    </S.Header>
  );
};

export default Header;
