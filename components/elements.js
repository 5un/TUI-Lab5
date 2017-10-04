import styled from 'styled-components'

export const Button = styled.button`
  appearance: none;
  border: 0;
  background-color: purple;
  color: white;
  padding: 20px;
  min-width: 300px;
  border-radius: 50px;
  font-size: 24px;
  font-family: inherit;

  &:hover {
    transform: scale(1.1);
  }

  transition: transform 0.1s;
`

export const Score = styled.h2`
  font-size: 120px;
  margin: 0;
`