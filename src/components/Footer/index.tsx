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
            <Link>Ação</Link>
          </li>
          <li>
            <Link>Aventura</Link>
          </li>
          <li>
            <Link>Simulação</Link>
          </li>
          <li>
            <Link>FPS</Link>
          </li>
          <li>
            <Link>RPG</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <TitleSection>Acesso Rápido</TitleSection>
        <Links>
          <li>
            <Link>Novidades</Link>
          </li>
          <li>
            <Link>Promoções</Link>
          </li>
          <li>
            <Link>Em Breve</Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; EPLAY Todos os direitos reservados.</p>
    </div>
  </ContainerFooter>
)
export default Footer
