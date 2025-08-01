import styled from "styled-components";

export const CheckoutContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px 0;

  padding: 40px 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 32px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const CartContainer = styled.section`
  grid-column: 1 / span 2;
  & > button {
    display: none;
  }

  h1 {
    font: ${({ theme }) => theme.fonts["Inter/24/700"]};
    color: ${({ theme }) => theme.colors["Inputs-Icons"]};
    font-weight: 500;
  }

  & > p {
    font: ${({ theme }) => theme.fonts["Inter/16/500"]};
    color: ${({ theme }) => theme.colors["Inputs-Icons"]};
    margin-bottom: 23px;
    span {
      font-weight: bold;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    & > button {
      display: block;
    }
  }
`;

export const OrderContainer = styled.section`
  grid-row: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 16px 24px;

  button:first-child {
    margin-right: auto;
  }

  background-color: ${({ theme }) => theme.colors.white};

  width: 100%;
  height: 450px;
  margin: 0 auto;

  a {
    font: ${({ theme }) => theme.fonts["Inter/14/400"]};
    color: ${({ theme }) => theme.colors["textos-apoio"]};

    text-transform: uppercase;
    text-decoration: underline;
    margin-bottom: 12px;
  }

  h1 {
    font: ${({ theme }) => theme.fonts["Inter/24/700"]};
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
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    button:first-child {
      display: none;
    }
    grid-row: unset;
    width: 352px;
    height: 700px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  max-height: calc(100vh - 290px);
  overflow-y: scroll;
  flex-direction: column;
  min-height: 550px;
  gap: 16px;
  a {
    font: ${({ theme }) => theme.fonts["Inter/24/700"]};
  }
`;
