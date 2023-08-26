import { useNavigate } from 'react-router-dom'

import { HeaderContainer, Titulo, BotaoHome, BotaoCadastro } from './styles'

type Props = {
  mostrarCadastro: boolean
}
const Header = ({ mostrarCadastro }: Props) => {
  const navigate = useNavigate()
  return (
    <HeaderContainer>
      {mostrarCadastro ? (
        <>
          <Titulo>
            Contatos <br /> Home
          </Titulo>
          <BotaoCadastro onClick={() => navigate('/cadastro')} type="button">
            Cadastro
          </BotaoCadastro>
        </>
      ) : (
        <>
          <Titulo>Cadastro</Titulo>
          <BotaoHome onClick={() => navigate('/')} type="button">
            Home
          </BotaoHome>
        </>
      )}
    </HeaderContainer>
  )
}

export default Header
