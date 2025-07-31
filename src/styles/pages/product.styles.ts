import styled from "styled-components";

export const ProductContainer = styled.main`
  padding: 25px 0;
`;

export const Product = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    object-fit: cover;
  }
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    img {
      width: 580px;
      height: 580px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 32px;
  }
`;

export const ProductHeader = styled.div`
  & > p:first-child {
    font: ${({ theme }) => theme.fonts["Inter/16/500"]};
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors["Inputs-Icons"]};
    margin-bottom: 12px;
  }

  h2 {
    font: ${({ theme }) => theme.fonts["Inter/32/300"]};
    color: ${({ theme }) => theme.colors["Inputs-Icons"]};
    margin-bottom: 4px;
  }

  & > p:nth-child(3) {
    color: ${({ theme }) => theme.colors.green};
    font: ${({ theme }) => theme.fonts["Inter/24/700"]};
  }
`;

export const ProductInformation = styled.div`
  width: 100%;
  h3 {
    font: ${({ theme }) => theme.fonts["Inter/16/500"]};
    color: ${({ theme }) => theme.colors["textos-apoio"]};
    margin-bottom: 8px;
  }

  p {
    font: ${({ theme }) => theme.fonts["Inter/14/400"]};
    color: ${({ theme }) => theme.colors["Inputs-Icons"]};
    margin-bottom: 12px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 580px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 508px;
  }
`;
