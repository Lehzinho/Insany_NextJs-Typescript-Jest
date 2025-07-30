import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  gap: 15px;
  background-color: ${({ theme }) => theme.colors.white};

  img {
    border-radius: 8px 0 0 8px;
  }
  border-radius: 8px;
`;

export const CartItemInformation = styled.div`
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
`;
