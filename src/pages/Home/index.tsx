//Foi feito a troca dos fecths pelo useGetOnSaleQuery e useGetSoonQuery
//Foi trocado o atributo game no <ProductList>
//É necessario criar um if para confimar o carregamento dos dados, todo componente react precisa de ter um return

import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: onSaleGames } = useGetOnSaleQuery()
  const { data: SoonGames } = useGetSoonQuery()

  if (onSaleGames && SoonGames) {
    return (
      <>
        <Banner />
        <ProductsList games={onSaleGames} title="Promoções" background="black" id="on-sale" />
        <ProductsList games={SoonGames} title="Em Breve" background="gray" id="coming-soon" />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
