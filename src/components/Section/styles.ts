import styled from 'styled-components'
import type { Props } from '.'
import { cores } from '../../styles'
import { CardContainer } from '../Product/style'

export const ContainerCards = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) => (props.background === 'black' ? cores.preto : cores.cinza)};

  ${CardContainer} {
    background-color: ${(props) => (props.background === 'black' ? cores.cinza : cores.preto)};
  }

  p {
    font-size: 14px;
    line-height: 22px;
    max-width: 640px;
  }
`

export const TitleSection = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
`
