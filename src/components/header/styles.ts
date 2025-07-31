import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const MainSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 124px;

  width: 100%;

  h1 {
    font: ${({ theme }) => theme.fonts["Inter/40/700"]};
    color: ${({ theme }) => theme.colors["logo-color"]};
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 24px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: space-between;
    align-items: center;
    height: 80px;
  }
`;
