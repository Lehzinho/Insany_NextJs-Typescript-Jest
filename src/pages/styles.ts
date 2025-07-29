import styled from "styled-components";

export const Container = styled.main`
  & > h1 {
    margin-bottom: 34px;
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
  gap: 20px;

  margin-bottom: 168px;
  & > button {
    display: flex;
    flex-direction: column;
    gap: 16px;

    width: 208px;
    height: 116px;
    padding: 32px 40px;

    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.colors["border-color"]};
    background-color: ${({ theme }) => theme.colors.white};

    cursor: pointer;
    h3 {
      white-space: nowrap;
      ${({ theme }) => theme.fonts.categoryh3}
    }

    & > p {
      font: ${({ theme }) => theme.fonts.buttonRegular};
    }
  }
`;
