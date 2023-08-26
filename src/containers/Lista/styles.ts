import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
export const ListaContainer = styled.li`
  max-width: 1024px;
  width: 100%;
  margin: 20px auto;
  padding: 8px;
  border: 5px solid transparent;
  transition: all 0.3s ease;
  text-align: center;
  background-color: ${variaveis.platium};
  border-radius: 8px;

  &:hover {
    border: 5px solid ${variaveis.platium};
    box-shadow: 1px 8px 10px ${variaveis.rose};
  }
`
