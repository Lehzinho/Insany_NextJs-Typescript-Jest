import styled from "styled-components";

interface ButtonProps {
  $color: string;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  width: 100%;
  height: 40px;

  border: none;
  border-radius: 4px;

  background-color: ${({ theme, $color }) =>
    $color === "Black" ? theme.colors.black : theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  font: ${({ theme }) => theme.fonts["Inter/16/500"]};

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
