import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  background-color: ${({ theme }) => theme.colors.white};

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
  }
  border-radius: 8px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-wrap: nowrap;
    img {
      width: 256px;
      height: 211px;
      border-radius: 8px 0 0 8px;
    }
  }
`;

export const CartItemInformation = styled.div`
  min-width: 256px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 16px;

  & > p {
    color: ${({ theme }) => theme.colors["Inputs-Icons"]};
    font: ${({ theme }) => theme.fonts["Inter/12/400"]};
  }

  & > div:first-child > button > svg {
    color: ${({ theme }) => theme.colors.excluir};
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  & > div:first-child > button {
    all: unset;
    cursor: pointer;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;
