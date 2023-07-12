import { useState, useEffect, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

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
  const [telefoneLocal, setTelefoneLocal] = useState(0)

  useEffect(() => {
    const qtaNumeros = telefone.toString()
    if (nome.length > 0 && email.length > 0 && qtaNumeros.length >= 0) {
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
          type="text"
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
          type="text"
          value={telefoneLocal}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTelefoneLocal(parseInt(e.target.value))
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
