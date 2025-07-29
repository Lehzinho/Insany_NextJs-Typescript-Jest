import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 352px;
  padding: 0 12px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background};

  input {
    background-color: transparent;
    width: 100%;
    border: none;
    height: 42px;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors["textos-apoio"]};
    }
  }
  & > svg {
    stroke: ${({ theme }) => theme.colors["textos-apoio"]};
  }
`;
