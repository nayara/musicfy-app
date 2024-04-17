import { styled } from "styled-components";

const Container = styled.header`
  position: sticky;
  top: 0;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.neutral.black};
  color: ${({ theme }) => theme.colors.neutral.white};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export { Container };
