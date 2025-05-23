import type { JSX } from 'react'
import { ContainerCards, TitleSection } from './styles'

export type Props = {
  title: string
  background: 'black' | 'gray'
  children: JSX.Element
}

const Section = ({ title, background, children }: Props) => (
  <ContainerCards background={background}>
    <div className="container">
      <TitleSection>{title}</TitleSection>
      {children}
    </div>
  </ContainerCards>
)
export default Section
