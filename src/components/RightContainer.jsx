import styled from 'styled-components';
import { useEffect, useRef } from 'react';

const Container = styled.div`
  background-color: ${({ $child }) => $child ? 'tomato' : 'yellowgreen'};
  width: 20%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 5rem;
  border-radius: 2rem;
  margin: auto;
`

export const RightContainer = ({ child }) => {
  const counter = useRef(0)

  useEffect(() => {
    counter.current += 1
  })

  return (
    <Container $child={child}>
      <h1>{child ? 'Child' : 'Direct'}</h1>
      <h2>{`Render count: ${counter.current}`}</h2>
    </Container>
  )
}