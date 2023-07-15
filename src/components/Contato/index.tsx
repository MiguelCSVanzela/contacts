import { useState, useEffect, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { IMaskInput } from 'react-imask'

import { excluir, alterar } from '../../store/reducers/contato'
import ContatoType from '../../models/Contato'

import {
  BotaoEditar,
  BotaoExcluir,
  BotaoSalvar,
  BotaoCancelar,
  ContainerCampo,
  Campo
} from './styles'

type Props = ContatoType

const Contato = ({ nome, email, telefone, id }: Props) => {
  const dispatch = useDispatch()
  const [editando, setEditando] = useState(false)
  const [nomeLocal, setNomeLocal] = useState('')
  const [emailLocal, setEmailLocal] = useState('')
  const [telefoneLocal, setTelefoneLocal] = useState('')

  useEffect(() => {
    if (nome.length > 0 && email.length > 0 && telefone.length > 0) {
      setNomeLocal(nome)
      setEmailLocal(email)
      setTelefoneLocal(telefone)
    }
  }, [nome, email, telefone])

  const cancelaEdicao = () => {
    setEditando(false)
    setNomeLocal(nome)
    setEmailLocal(email)
    setTelefoneLocal(telefone)
  }
  const salvarAlteracoes = () => {
    dispatch(
      alterar({
        nome,
        email,
        telefone,
        id
      })
    )
    setEditando(false)
  }
  return (
    <>
      <h2>{editando && <em>Editando...</em>}</h2>
      <ContainerCampo>
        <Campo
          disabled={!editando}
          type="text"
          value={nomeLocal}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setNomeLocal(e.target.value)
          }
        />
      </ContainerCampo>
      <ContainerCampo>
        <label htmlFor="email">
          <img src={require('../../media/email.png')} />
        </label>
        <Campo
          disabled={!editando}
          type="email"
          value={emailLocal}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmailLocal(e.target.value)
          }
          id="email"
        />
      </ContainerCampo>
      <ContainerCampo>
        <label htmlFor="telefone">
          <img src={require('../../media/whatsapp.png')} />
        </label>
        <Campo
          disabled={!editando}
          as={IMaskInput}
          type="text"
          mask="(00)00000-0000"
          value={telefoneLocal}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTelefoneLocal(e.target.value)
          }
          id="telefone"
        />
      </ContainerCampo>
      {editando ? (
        <>
          <BotaoSalvar onClick={salvarAlteracoes} type="button">
            Salvar
          </BotaoSalvar>
          <BotaoCancelar onClick={cancelaEdicao} type="button">
            Cancelar
          </BotaoCancelar>
        </>
      ) : (
        <>
          <BotaoEditar onClick={() => setEditando(true)} type="button">
            Editar
          </BotaoEditar>
          <BotaoExcluir onClick={() => dispatch(excluir(id))} type="button">
            Excluir
          </BotaoExcluir>
        </>
      )}
    </>
  )
}

export default Contato
