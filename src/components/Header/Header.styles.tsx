import { styled } from "styled-components";

const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.neutral.white};
`;

export { Container };
