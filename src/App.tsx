//Comece importando o Provider
//Depois envolva todo o conteúdo dentro do return na tag <Provider>
//Depois coloque a propriedade store dentro da tag do provider, que recebe o nosso store
//Agora é configurar a api com o redux, começando criando a pasta services

import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import { GlobalCss } from './styles'
import Rotas from './routes'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import { store } from './store'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
