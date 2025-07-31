import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    position: absolute;
    right: 0;
    bottom: 0;

    transform: translate(50%, 50%);

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.excluir};
    color: ${({ theme }) => theme.colors.white};

    font: ${({ theme }) => theme.fonts["Saira/10/500"]};

    width: 17px;
    height: 17px;
    border-radius: 99px;
  }
`;
