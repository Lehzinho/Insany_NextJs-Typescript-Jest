import styled from "styled-components";

export const PaginationContainer = styled.section`
  width: 100%;
  & > div {
    width: fit-content;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 21px;
  }
`;

interface PaginationButtonProps {
  $active?: boolean;
}

export const PaginationButton = styled.button<PaginationButtonProps>`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;
  border-radius: 8px;

  background-color: ${({ theme, $active }) =>
    $active ? "trasparent" : theme.colors["88gray"]};
  border: ${({ theme, $active }) =>
    $active ? `solid 1px ${theme.colors.purple}` : "none"};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.purple : theme.colors["textos-apoio"]};
  font: ${({ theme }) => theme.fonts.buttonRegular};

  cursor: pointer;
`;
