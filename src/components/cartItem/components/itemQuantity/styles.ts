import styled from "styled-components";

export const ItemQuantityContainer = styled.div`
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors["border-gray"]};
  background-color: ${({ theme }) => theme.colors["box-gray"]};
  max-width: 65px;
  height: 40px;
  border-radius: 8px;

  & > button {
    all: unset;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 17px;
    color: ${({ theme }) => theme.colors["textos-apoio"]};

    cursor: pointer;
  }
`;

interface ItemDropDownProps {
  $active: boolean;
}

export const ItemDropDown = styled.div<ItemDropDownProps>`
  position: absolute;
  top: 100%;
  z-index: 10;

  display: flex;
  flex-direction: column;

  width: 100%;
  max-height: 200px;
  padding: 8px 0;
  border-radius: 8px;

  border: 1px solid ${({ theme }) => theme.colors["border-gray"]};
  background-color: ${({ theme }) => theme.colors["box-gray"]};
  color: ${({ theme }) => theme.colors["textos-apoio"]};

  overflow-y: scroll;

  opacity: ${({ $active }) => ($active ? 1 : 0)};
  visibility: ${({ $active }) => ($active ? "visible" : "hidden")};
  transform: translateY(${({ $active }) => ($active ? "5px" : 0)});

  transition: all 150ms ease-in-out;
  p {
    padding: 2px 8px;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.colors.green};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
