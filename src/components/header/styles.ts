import styled from "styled-components";

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const MainSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 80px;

  h1 {
    font: ${({ theme }) => theme.fonts.logo};
    color: ${({ theme }) => theme.colors["logo-color"]};
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 24px;
  }
`;
