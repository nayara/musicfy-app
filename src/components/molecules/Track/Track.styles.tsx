import { styled } from "styled-components";

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.neutral.white};
  font-size: 1.5rem;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Track = styled.div`
  display: flex;
  flex-direction: column;
`;

export { Title, Wrapper, Track };
