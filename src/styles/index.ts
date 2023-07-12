import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  font-family: 'Roboto', sans-serif;
}
`

export const Container = styled.div`
  max-width: 100vw;
  width: 100%;
  margin: 0 auto;
`
export const Botao = styled.button`
  font-family: 'Cinzel', serif;
  padding: 8px 16px;
  color: #fff;
  font-size: 24px;
  border-radius: 8px;
  margin: auto 8px;
  border: none;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    border-color: black;
    color: black;
  }
`

export default EstiloGlobal
