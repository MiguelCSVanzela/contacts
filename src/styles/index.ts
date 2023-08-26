import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  font-family: sans-serif;
}

body{
  background-color: ${variaveis.dark};
  overflow-y: hidden;
}
`

export const Container = styled.div`
  max-width: 100vw;
  width: 100%;
  margin: 0 auto;
`
export const Botao = styled.button`
  padding: 8px 16px;
  color: #fff;
  font-size: 24px;
  margin: auto 8px;
  border: none;
  cursor: pointer;
  border: 1.5px solid transparent;
  transition: all 0.3s ease;
  border-radius: 8px;

  &:hover {
    border-color: ${variaveis.dark};
    color: black;
  }
`

export default EstiloGlobal
