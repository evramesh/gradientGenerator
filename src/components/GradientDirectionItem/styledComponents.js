import styled from 'styled-components/macro'

export const ListItem = styled.li`
  list-style: none;
  margin: 5px;
`
export const Button = styled.button`
  color: ${props => (props.activeStatus ? '#334155' : '#1e293b')};
  opacity: ${props => (props.activeStatus ? 1 : 0.5)};
  border-width: 0px;
  height: 40px;
  width: 100px;
  border-radius: 10px;
`
