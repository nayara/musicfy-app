import { styled } from "styled-components";

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.neutral.white};
  font-size: 3vh;
`;

const Wrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
`;

const Track = styled.div`
  display: flex;
  flex-direction: column;
`;

export { Title, Wrapper, Track };
