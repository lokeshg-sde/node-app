import React from 'react'

import { StyledBox } from '..'

type Props = {
  background?: 'white' | 'light' | 'default'
  children?: JSX.Element | JSX.Element[]
}

export const PageLayout = ({ background, children }: Props) => (
  <StyledBox
    width="100vw"
    height="100%"
    minHeight="100vh"
    bgColor={background}
    sx={{ overflowX: 'hidden' }}>
    {children}
  </StyledBox>
)
