import styled from 'styled-components'

export const ListaContainer = styled.li`
  max-width: 1024px;
  width: 100%;
  margin: 20px auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 8px;
  border: 0.1px solid transparent;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    border: 0.1px solid black;
  }
`
