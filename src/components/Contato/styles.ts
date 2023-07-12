import styled from 'styled-components'
import { Botao } from '../../styles'
import variaveis from '../../styles/variaveis'

export const ContainerCampo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 32px;
    margin-right: 8px;
    cursor: pointer;
  }
`

export const Campo = styled.input`
  text-align: center;
  border: none;
  border-radius: 8px;
  border: 0.3px solid transparent;
  transition: all 0.3s ease;
  background-color: transparent;
  margin-bottom: 8px;
  font-size: 32px;
  padding: 2px;
  outline: none;
  border: 0.3px solid transparent;
  width: 70%;
  &:focus {
    border-color: #c1c1c1;
    background-color: #ccc;
    color: #fff;
  }
`

export const BotaoEditar = styled(Botao)`
  background-color: ${variaveis.verde};
  margin-left: 0;
`
export const BotaoExcluir = styled(Botao)`
  background-color: ${variaveis.vermelho};
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verdeClaro};
  margin-left: 0;
`

export const BotaoCancelar = styled(Botao)`
  background-color: ${variaveis.vermelhoClaro};
`
