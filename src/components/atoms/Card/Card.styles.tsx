import styled, { css } from "styled-components";

type TContainerProps = {
  $clickable?: boolean;
  $imgPosition?: string;
};

const Container = styled.div<TContainerProps>`
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  padding: 1rem;

  ${({ $imgPosition }) => {
    switch ($imgPosition) {
      case "start":
        return {
          flexDirection: "row",
        };

      default:
        return {
          flexDirection: "column",
        };
    }
  }}

  ${({ $clickable }) =>
    $clickable &&
    css`
      transition: transform 0.45s;

      &:hover {
        background-color: rgba(0, 0, 0, 0.2);
      }
    `}
`;

const Button = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

type TTextProps = {
  $imgPosition?: string;
};

const Title = styled.h2<TTextProps>`
  text-align: left;
  color: ${({ theme }) => theme.colors.neutral.white};
  font-size: 2vh;
  align-self: flex-start;
  margin: 0;

  ${({ $imgPosition }) => {
    switch ($imgPosition) {
      case "start":
        return css`
          flex-direction: row;
        `;

      default:
        return css`
          padding: 0.3rem 0;
        `;
    }
  }}
`;

const Subtitle = styled.h3<TTextProps>`
  text-align: left;
  color: ${({ theme }) => theme.colors.terciary};
  font-size: 1.5vh;
  align-self: flex-start;
  margin: 0;
`;

type TImgProps = {
  size?: string;
};

const Image = styled.img<TImgProps>`
  border-radius: 0.5rem;

  ${({ size }) => {
    switch (size) {
      case "small":
        return css`
          height: 5vh;
        `;

      case "medium":
        return css`
          height: 20vh;
        `;

      case "large":
        return css`
          height: 40vh;
        `;

      default:
        return css`
          height: 20vh;
        `;
    }
  }}
`;

const ContentWrapper = styled.div<TContainerProps>`
  display: flex;

  ${({ $imgPosition }) => {
    switch ($imgPosition) {
      case "start":
        return css`
          height: 100%;
          flex-direction: column;
          justify-content: space-between;
          padding: 0 0.9rem;
        `;

      default:
        return css`
          flex-direction: column;
          justify-content: space-between;
          padding: 0.9rem 0;
        `;
    }
  }}
`;

export { Container, Image, Title, Button, ContentWrapper, Subtitle };
