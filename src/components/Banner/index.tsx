//Aqui será feito a troca do fetch pelo useGetFeaturedGameQuery
//Ao invés de trocar game por data, eu posso usar data: game para fazer essa troca automatica

import Button from '../Button'
import Tag from '../Tag'
import { Precos, Titulo, Imagem } from './syles'
import { formataPreco } from '../ProductsList'
import { useGetFeaturedGameQuery } from '../../services/api'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) return <h3>Carregando...</h3>

  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="containerBanner">
        <Tag style={{ position: 'absolute', bottom: '516px' }} size="big">
          Destaque do dia
        </Tag>
        <Titulo>{game.name}</Titulo>
        <Precos>
          De <span>{formataPreco(game.prices.old)}</span> <br />
          por apenas {formataPreco(game.prices.current)}
        </Precos>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar essa promoção!"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}
export default Banner
