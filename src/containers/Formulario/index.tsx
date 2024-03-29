import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FormEvent, useState, ChangeEvent } from 'react'
import { IMaskInput } from 'react-imask'

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
  const [telefone, setTelefone] = useState('')

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
        <IMaskInput
          mask="(00)00000-0000"
          type="tel"
          id="telefone"
          onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
            setTelefone(target.value)
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
