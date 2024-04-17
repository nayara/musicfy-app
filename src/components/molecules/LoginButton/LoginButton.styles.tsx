import { styled } from "styled-components";

const Label = styled.span`
  font-size: 2vh;
  color: ${({ theme }) => theme.colors.neutral.white};
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.highlight};
  border-radius: 0.5rem;
  margin: 20px;
  font-weight: bold;
  letter-spacing: 0.01rem;
`;

export { Label };
