import { styled } from "styled-components";

const Title = styled.h1`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.neutral.white};
`;

export { Title };
