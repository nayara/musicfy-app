import styled from "styled-components";

const Container = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  transition: transform 0.45s;
  border-radius: 0.5rem;
  padding: 1rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
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

const Title = styled.h2`
  text-align: left;
  color: ${({ theme }) => theme.colors.neutral.white};
  font-size: 1rem;
  align-self: flex-start;
`;

const Image = styled.img`
  height: 10rem;
  border-radius: 0.5rem;
`;

export { Container, Image, Title, Button };
