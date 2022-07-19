import React from 'react'

import { StyledBox } from '..'

type Props = {
  background?: 'white' | 'light' | 'default'
  children?: JSX.Element | JSX.Element[]
}

export const PageLayout = ({ background, children }: Props): JSX.Element => (
  <StyledBox
    bgColor={background}
    height="100%"
    minHeight="100vh"
    sx={{ overflowX: 'hidden' }}
    width="100vw">
    {children}
  </StyledBox>
)
