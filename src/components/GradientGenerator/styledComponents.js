import styled from 'styled-components/macro'

export const Main = styled.div`
  background-image: linear-gradient(${props => props.gradientValue});
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Heading = styled.h1`
  color: white;
  font-family: roboto;
`
export const Paragraph = styled.p`
  color: white;
  font-family: roboto;
`
export const UnorderList = styled.ul`
  display: flex;
`
export const GenerateButtom = styled.button`
  background-color: orange;
  color: white;
  border-width: 0px;
`
export const Mini = styled.div`
  display: flex;
`
export const InputUser = styled.input`
  width: 120px;
  background-color: transparent;
  border-width: 0px;
  border: 2px solid white;
`
