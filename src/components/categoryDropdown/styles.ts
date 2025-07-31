import styled from "styled-components";

export const CategoryDropdownContainer = styled.div`
  position: relative;
  button {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    font: ${({ theme }) => theme.fonts["Inter/14/400"]};
    color: ${({ theme }) => theme.colors["textos-apoio"]};

    cursor: pointer;
  }
`;

interface DropdownContainerProps {
  $active: boolean;
}

export const DropdownContainer = styled.div<DropdownContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: absolute;
  top: 100%;
  border-radius: 4px;
  padding: 12px 0;

  background-color: ${({ theme }) => theme.colors.white};
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  visibility: ${({ $active }) => ($active ? "visible" : "hidden")};
  transform: translateY(${({ $active }) => ($active ? "5px" : 0)});

  transition: all 150ms ease-in-out;

  a,
  p {
    white-space: nowrap;
    font: ${({ theme }) => theme.fonts["Inter/14/400"]};
    padding: 0 16px;

    cursor: pointer;
  }

  z-index: 10;
`;
