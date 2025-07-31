import styled from "styled-components";

export const Container = styled.main`
  & > h1 {
    margin-bottom: 34px;
    text-align: center;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    & > h1 {
      text-align: left;
    }
  }
`;

export const ProductsContainer = styled.section`
  width: 100%;
  margin-bottom: 104px;

  & > div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 34px 26px;
    margin-bottom: 51px;
  }
`;

export const CategoriesContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  margin-bottom: 168px;
  & > a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    width: 208px;
    height: 116px;

    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.colors["border-color"]};
    background-color: ${({ theme }) => theme.colors.white};

    cursor: pointer;
    h3 {
      white-space: nowrap;
      ${({ theme }) => theme.fonts["Inter/16/700"]}
    }

    & > p {
      font: ${({ theme }) => theme.fonts["Inter/16/500"]};
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const SortContainer = styled.section`
  padding: 32px 0;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
`;
