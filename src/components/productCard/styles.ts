import styled from "styled-components";

export const CardContainer = styled.div`
  width: 356px;
  height: 520px;

  border-radius: 16px;
  overflow: hidden;

  background-color: ${({ theme }) => theme.colors.white};

  & > div {
    padding: 12px 21px;
  }

  img {
    object-fit: cover;
  }
`;

export const RatingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 15px;

  p {
    font: ${({ theme }) => theme.fonts.regular};
  }

  & > p:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    font-weight: 500;

    svg {
      color: ${({ theme }) => theme.colors.yellow};
    }
  }
`;

export const InfoContainer = styled.div`
  h3 {
    font: ${({ theme }) => theme.fonts.h3};
  }
  p {
    font: ${({ theme }) => theme.fonts.regular};
  }
  margin-bottom: 15px;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  & > p:first-child {
    font: ${({ theme }) => theme.fonts.price};
    color: ${({ theme }) => theme.colors.green};
  }
  & > p:nth-child(2) {
    font: ${({ theme }) => theme.fonts.regular};
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
  height: 40px;

  border: none;
  border-radius: 4px;

  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};

  font: ${({ theme }) => theme.fonts.button};
`;
