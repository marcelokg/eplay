import Section from '../Section'
import { Action, Item, Items, Modal, ModalContent } from './styles'
import playImg from '../../assets/images/play.png'
import zoomImg from '../../assets/images/zoom.png'
import close from '../../assets/images/close-icon.png'
import { useState } from 'react'
import type { GalleryItem } from '../../pages/Home'

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: '',
  })

  const getMediaCover = (Item: GalleryItem) => {
    if (Item.type === 'image') return Item.url
    return defaultCover
  }

  const getMediaIcon = (Item: GalleryItem) => {
    if (Item.type === 'image') return zoomImg
    return playImg
  }

  const closeModal = () => {
    setModal({ isVisible: false, type: 'image', url: '' })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {items.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url,
                })
              }}
            >
              <img src={getMediaCover(media)} alt={`Mídia ${index + 1} de ${name}`} />
              <Action>
                <img src={getMediaIcon(media)} alt="Clique aqui para aumentar a mídia" />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>

      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent>
          <header>
            <h4>{name}</h4>
            <img
              src={close}
              alt="Icone de fechar"
              onClick={() => {
                closeModal()
              }}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe src={modal.url} frameBorder="0" />
          )}
        </ModalContent>
        <div
          className="overlay"
          onClick={() => {
            closeModal()
          }}
        ></div>
      </Modal>
    </>
  )
}
export default Gallery
