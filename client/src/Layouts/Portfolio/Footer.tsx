import React from 'react'

import { WaveContainer, Waves } from './Wave'

type Props = {
  children?: JSX.Element | JSX.Element[]
}

export const Footer = ({ children }: Props): JSX.Element => (
  <WaveContainer>
    <Waves> {children} </Waves>
  </WaveContainer>
)
