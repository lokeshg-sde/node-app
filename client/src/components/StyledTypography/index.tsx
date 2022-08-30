import React, { forwardRef } from 'react'

import TypoGraphy from './Typography'

const StyledTypography = forwardRef(
  (
    {
      color,
      fontWeight,
      textTransform,
      verticalAlign,
      textGradient,
      opacity,
      children,
      ...rest
    }: Props,
    ref
  ) => (
    <TypoGraphy
      {...rest}
      ownerState={{
        color,
        textTransform,
        verticalAlign,
        fontWeight,
        opacity,
        textGradient,
        darkMode: false,
      }}
      // @ts-expect-error auto-src fix these on forwarding
      ref={ref}
    >
      {children}
    </TypoGraphy>
  )
)

type Props = {
  color:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'light'
    | 'dark'
    | 'text'
    | 'white'
  fontWeight: false | 'light' | 'regular' | 'medium' | 'bold'
  textTransform: 'none'
  verticalAlign:
    | 'unset'
    | 'baseline'
    | 'sub'
    | 'super'
    | 'text-top'
    | 'text-bottom'
    | 'middle'
    | 'top'
    | 'bottom'
  textGradient: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any
  opacity: number
}

export default StyledTypography
