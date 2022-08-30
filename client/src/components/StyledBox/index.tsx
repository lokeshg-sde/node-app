import React, { forwardRef } from 'react'

import type { BoxProps } from '@mui/material'
import BoxRoot from './Box'

type Props = Partial<{
  variant: 'contained' | 'gradient'
  bgColor: string
  color: string
  children?: JSX.Element | JSX.Element[]
  opacity: number
  borderRadius: string
  shadow: string
  coloredShadow:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'light'
    | 'dark'
    | 'none'
}>

const StyledBox = forwardRef(
  (
    {
      variant,
      bgColor,
      color,
      opacity,
      borderRadius,
      shadow,
      coloredShadow,
      children,
      ...rest
    }: Props & BoxProps,
    ref
  ) => (
    <BoxRoot
      {...rest}
      bgColor={bgColor || 'transparent'}
      borderRadius={borderRadius || 'none'}
      color={color || 'dark'}
      coloredShadow={coloredShadow || 'none'}
      opacity={opacity || 1}
      ref={ref}
      shadow={shadow || 'none'}
      variant={variant || 'contained'}
    >
      {children}
    </BoxRoot>
  )
)

export default StyledBox
