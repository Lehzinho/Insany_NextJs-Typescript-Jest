import React from "react";
import * as S from "./styles";
import back from "@/assets/icons/back.svg";
import Image from "next/image";
import { useRouter } from "next/router";

const BackButton = () => {
  const router = useRouter();
  return (
    <S.ButtonContainer onClick={() => router.back()}>
      <p>
        <Image src={back} width={24} height={24} alt="Back button" />
        Voltar
      </p>
    </S.ButtonContainer>
  );
};

export default BackButton;
