import styled from "styled-components";

export const CheckoutContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  padding-top: 40px;
`;

export const CartContainer = styled.section`
  grid-column: 1 / span 2;

  h1 {
    font: ${({ theme }) => theme.fonts.price};
    color: ${({ theme }) => theme.colors["Inputs-Icons"]};
    font-weight: 500;
  }

  & > p {
    font: ${({ theme }) => theme.fonts.button};
    color: ${({ theme }) => theme.colors["Inputs-Icons"]};
    margin-bottom: 23px;
    span {
      font-weight: bold;
    }
  }
`;

export const OrderContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 16px 24px;

  background-color: ${({ theme }) => theme.colors.white};

  width: 352px;
  height: 700px;

  a {
    font: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors["textos-apoio"]};

    text-transform: uppercase;
    text-decoration: underline;
    margin-bottom: 12px;
  }

  h1 {
    font: ${({ theme }) => theme.fonts.price600};
    color: ${({ theme }) => theme.colors["Inputs-Icons"]};
    margin-bottom: 29px;
  }

  ul {
    margin-bottom: 40px;

    li {
      display: flex;
      justify-content: space-between;
      margin-bottom: 12px;

      div {
        width: 100%;
        height: 1px;
        background-color: ${({ theme }) => theme.colors["textos-apoio"]};
      }

      &:last-child {
        font-weight: 600;
      }
    }
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
