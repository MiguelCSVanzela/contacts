import styled from 'styled-components'

import { Botao } from '../../styles'
import variaveis from '../../styles/variaveis'

export const FormContainer = styled.form`
  max-width: 960px;
  width: 100%;
  margin: 24px auto;
  text-align: center;
`

export const CampoCadastro = styled.div`
  display: block;
  margin-bottom: 16px;

  label {
    color: ${variaveis.platium};
  }
  input {
    width: 480px;
    height: 32px;
    outline: none;
    border: none;
    border: 2px solid transparent;
    outline: 2px solid transparent;
    border-bottom-color: ${variaveis.sky};
    transition: all 2s ease;
    text-align: center;
    border-radius: 8px;
  }

  input:focus {
    border-color: ${variaveis.sky};
    outline-color: ${variaveis.sky};
    transition: all 0.4s ease;
  }

  label {
    display: block;
    font-size: 24px;
    text-transform: uppercase;
  }

  img {
    margin: 20px auto;
    display: block;
    border-radius: 50%;
    height: 200px;
    width: 200px;
  }
`
export const BotaoCadastrar = styled(Botao)`
  background-color: ${variaveis.forest};
`

export const BotaoLimpar = styled(Botao)`
  background-color: ${variaveis.sky};
`
