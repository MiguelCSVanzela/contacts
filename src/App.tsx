import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import store from './store'
import Home from './pages/Home'
import EstiloGlobal, { Container } from './styles'
import Cadastro from './pages/Cadastro'

function App() {
  const rotas = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/cadastro',
      element: <Cadastro />
    }
  ])
  return (
    <Provider store={store}>
      <Container className="App">
        <EstiloGlobal />
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
