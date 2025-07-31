import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1144px;
  padding: 0 12px;
  margin: 124px auto 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 80px auto 0;
  }
`;
