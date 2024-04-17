import styled from "styled-components";

const PageTitle = styled.h1`
  color: ${({ theme }) => theme.colors.neutral.white};
  font-size: 4rem;
  margin: 0;
  padding: 3rem;
`;

const Subtitle = styled.h2`
  font-size: 2.5rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.neutral.white};

  @media (max-width: 1024px) {
    padding: 3.5rem 0;
  }
`;

const MusicListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 3rem;

  @media (max-width: 1024px) {
    padding: 3rem;
  }
`;

const PlaylistInfoWrapper = styled.section`
  padding: 0 1.5rem;
`;

const Container = styled.section`
  display: flex;
  color: ${({ theme }) => theme.colors.neutral.white};

  @media (max-width: 1024px) {
    padding: 3rem 0;
    flex-direction: column;
  }
`;

export {
  PageTitle,
  Container,
  Subtitle,
  MusicListWrapper,
  PlaylistInfoWrapper,
};
