import styled from "styled-components";

export const ButtonContainer = styled.button`
  all: unset;
  cursor: pointer;
  font: ${({ theme }) => theme.fonts.regular};
  font-weight: 500;
  margin-bottom: 22px;

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    color: ${({ theme }) => theme.colors["gray-textos"]};
  }
`;
