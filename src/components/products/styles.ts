import styled from "styled-components";

export const ProductsContainer = styled.section`
  width: 100%;
  margin-bottom: 104px;

  & > div {
    display: grid;
    grid-template-columns: 1fr;
    gap: 34px 26px;
    margin: 0 auto;
    margin-bottom: 51px;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      grid-template-columns: repeat(2, 1fr);
      width: 780px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      grid-template-columns: repeat(3, 1fr);
      width: 1120px;
    }
  }
`;
