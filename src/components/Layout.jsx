import styled from 'styled-components';
import { useState } from 'react';
import { Button, RightContainer } from './';

const Container = styled.div`
  width: 100svw;
  height: 100svh;
  display: flex;
  align-items: center;
`

const ButtonContainer = styled.div`
  width: 50svw;
  height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 5rem;
`

export const Layout = ({ children }) => {
  const [test, setTest] = useState(false)

  return (
    <Container>
      <ButtonContainer>
        <Button updateFunction={setTest} />
        <h1>{`Test value: ${test}`}</h1>
      </ButtonContainer>
      {children}
      <RightContainer />
    </Container>
  )
}