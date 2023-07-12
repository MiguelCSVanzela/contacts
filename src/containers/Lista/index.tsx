import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { ListaContainer } from './styles'
import { RootReducer } from '../../store'

const Lista = () => {
  const { itens } = useSelector((state: RootReducer) => state.contato)
  return (
    <ul>
      {itens.map((c) => (
        <ListaContainer key={c.nome}>
          <Contato
            nome={c.nome}
            email={c.email}
            telefone={c.telefone}
            id={c.id}
          />
        </ListaContainer>
      ))}
    </ul>
  )
}

export default Lista
