import styled from 'styled-components'
import { Botao } from '../../styles'
import variaveis from '../../styles/variaveis'

export const HeaderContainer = styled.header`
  padding: 16px;
  background-color: #dcdde1;
  text-align: center;
  font-family: Roboto, sans-serif;
`

export const Titulo = styled.h1`
  font-family: 'Cinzel', serif;
  font-weight: bold;
  font-size: 50px;
  margin: 20px auto;
  text-transform: uppercase;
  color: ${variaveis.azulEscuro};
`

export const BotaoHome = styled(Botao)`
  background-color: ${variaveis.verde};
`

export const BotaoCadastro = styled(Botao)`
  background-color: #c1c9d0;
`
