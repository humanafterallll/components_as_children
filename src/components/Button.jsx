import styled from 'styled-components';


const ButtonStyled = styled.button`
  background-color: black;
  color: white;
  padding: 1rem 2rem;
  border-radius: 1rem;
  font-size: 2rem;
  cursor: pointer;
`


export const Button = ({ updateFunction }) => {
  return <ButtonStyled onClick={() => updateFunction(prev => !prev)}>Click</ButtonStyled>
}