import { useEffect, useRef } from 'react'
import Tag from '../Tag'
import { CardContainer, CardDescricao, CardTitulo, Infos } from './style'

export type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number
}

const Product = ({ title, category, system, description, infos, image, id }: Props) => {
  const cardRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const currentCardRef = cardRef.current
    let observer: IntersectionObserver | null = null

    if (currentCardRef) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                if (currentCardRef) {
                  currentCardRef.classList.add('show')
                }
              }, 100)
            } else {
              // Remove a classe 'show' quando o card não está mais intersectando
              if (currentCardRef) {
                currentCardRef.classList.remove('show')
              }
            }
          })
        },
        {
          threshold: 0.1,
        },
      )

      observer.observe(currentCardRef)
    }

    return () => {
      if (currentCardRef && observer) {
        observer.unobserve(currentCardRef)
        observer = null
      }
    }
  }, [])

  const getDescricao = (descricao: string) => {
    if(descricao.length > 95) return descricao.slice(0, 92) + '...'
    return descricao
  }

  return (
    <CardContainer to={`/product/${id}`} ref={cardRef} className="product-card">
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <CardTitulo>{title}</CardTitulo>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <CardDescricao>{getDescricao(description)}</CardDescricao>
    </CardContainer>
  )
}
export default Product
