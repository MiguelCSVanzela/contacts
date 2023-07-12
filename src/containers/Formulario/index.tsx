import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FormEvent, useState, ChangeEvent } from 'react'

import {
  FormContainer,
  CampoCadastro,
  BotaoCadastrar,
  BotaoLimpar
} from './styles'
import { cadastrar } from '../../store/reducers/contato'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState('')

  const telefone = Number.parseInt(numero)
  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    dispatch(
      cadastrar({
        nome,
        email,
        telefone
      })
    )
    navigate('/')
  }
  return (
    <FormContainer onSubmit={cadastrarContato}>
      <CampoCadastro>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          required
          onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
            setNome(target.value)
          }
        />
      </CampoCadastro>
      <CampoCadastro>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          required
          onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
            setEmail(target.value)
          }
        />
      </CampoCadastro>
      <CampoCadastro>
        <label htmlFor="telefone">Telefone:</label>
        <input
          type="tel"
          id="telefone"
          onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
            setNumero(target.value)
          }
          required
        />
      </CampoCadastro>
      <BotaoCadastrar type="submit">Cadastrar</BotaoCadastrar>
      <BotaoLimpar type="reset">Limpar</BotaoLimpar>
    </FormContainer>
  )
}

export default Formulario
