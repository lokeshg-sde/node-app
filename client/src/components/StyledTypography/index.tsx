import { forwardRef } from 'react'

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
  ) => {
    return (
      // @ts-expect-error auto-src fix these on forwarding
      <TypoGraphy
        {...rest}
        // @ts-expect-error auto-src fix these on forwarding
        ref={ref}
        ownerState={{
          color,
          textTransform,
          verticalAlign,
          fontWeight,
          opacity,
          textGradient,
          darkMode: false,
        }}>
        {children}
      </TypoGraphy>
    )
  }
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
  children?: any
  opacity: number
}

export default StyledTypography
