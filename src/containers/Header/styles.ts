import styled from 'styled-components'
import { Botao } from '../../styles'
import variaveis from '../../styles/variaveis'

export const HeaderContainer = styled.header`
  padding: 16px;
  background-color: ${variaveis.platium};
  text-align: center;
`

export const Titulo = styled.h1`
  font-weight: bold;
  font-size: 50px;
  margin: 20px auto;
  text-transform: uppercase;
  color: ${variaveis.sky};
`

export const BotaoHome = styled(Botao)`
  background-color: ${variaveis.forest};
`

export const BotaoCadastro = styled(Botao)`
  background-color: ${variaveis.platium};
`
