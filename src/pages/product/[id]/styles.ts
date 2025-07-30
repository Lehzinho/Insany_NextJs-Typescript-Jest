import styled from "styled-components";

export const ProductContainer = styled.main`
  padding-top: 25px;
  & > button {
    all: unset;
    cursor: pointer;
    font: ${({ theme }) => theme.fonts.regular};
    font-weight: 500;
    margin-bottom: 22px;

    p {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;

      color: ${({ theme }) => theme.colors["gray-textos"]};
    }
  }
`;

export const Product = styled.section`
  display: flex;
  gap: 32px;
  img {
    border-radius: 4px;
    object-fit: cover;
  }
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const ProductHeader = styled.div`
  & > p:first-child {
    font: ${({ theme }) => theme.fonts.buttonRegular};
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors["Inputs-Icons"]};
    margin-bottom: 12px;
  }

  h2 {
    font: ${({ theme }) => theme.fonts.h2};
    color: ${({ theme }) => theme.colors["Inputs-Icons"]};
    margin-bottom: 4px;
  }

  & > p:nth-child(3) {
    color: ${({ theme }) => theme.colors.green};
    font: ${({ theme }) => theme.fonts.price600};
  }
`;

export const ProductInformation = styled.div`
  h3 {
    font: ${({ theme }) => theme.fonts.button};
    color: ${({ theme }) => theme.colors["textos-apoio"]};
    margin-bottom: 8px;
  }

  p {
    font: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors["Inputs-Icons"]};
  }
`;
