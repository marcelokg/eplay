import { useEffect, useState } from 'react'
import Button from '../Button'
import Tag from '../Tag'
import { Precos, Titulo, Imagem } from './syles'
import type { Game } from '../../pages/Home'
import { formataPreco } from '../ProductsList'

const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
      fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
        .then((res) => res.json())
        .then((res) => setGame(res))
    }, [])

  if (!game)
    return <h3>Carregando...</h3>

  return (
    <Imagem style={{backgroundImage: `url(${game.media.cover})`}}>
      <div className="containerBanner">
        <Tag style={{ position: 'absolute', bottom: '516px' }} size="big">
          Destaque do dia
        </Tag>
        <Titulo>{game.name}</Titulo>
        <Precos>
          De <span>{formataPreco(game.prices.old)}</span> <br />
          por apenas {formataPreco(game.prices.current)}
        </Precos>
        <Button type="link" to={`/product/${game.id}`} title="Clique aqui para aproveitar essa promoção!">
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}
export default Banner
