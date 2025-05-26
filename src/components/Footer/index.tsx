//É necessario instalar um pato para que o react-router-dom reconheça os #
// npm install --save react-router-hash-link
//Vai ser preciso instlar outro pacote para o typescript
//npm install --save-dev @types/react-router-hash-link

import { TitleSection } from '../ProductsList/styles'
import { ContainerFooter, FooterSection, Link, Links } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <ContainerFooter>
    <div className="container">
      <FooterSection>
        <TitleSection>Categorias</TitleSection>
        <Links>
          <li>
            <Link to='/categories#action'>Ação</Link>
          </li>
          <li>
            <Link to="/categories#rpg">RPG</Link>
          </li>
          <li>
            <Link to="/categories#simulation">Simulação</Link>
          </li>
          <li>
            <Link to="/categories#sports">Esportes</Link>
          </li>
          <li>
            <Link to="/categoriesfight">Luta</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <TitleSection>Acesso Rápido</TitleSection>
        <Links>
          <li>
            <Link to="/#on-sale">Promoções</Link>
          </li>
          <li>
            <Link to="/#coming-soon">Em Breve</Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; EPLAY Todos os direitos reservados.</p>
    </div>
  </ContainerFooter>
)
export default Footer
