import { forwardRef } from 'react'

import StyledButtonRoot from './Button'

type Props = {
  size: 'small' | 'medium' | 'large'
  variant: 'text' | 'contained' | 'outlined' | 'gradient'
  color:
    | 'white'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'light'
    | 'dark'
  circular: boolean
  iconOnly: boolean
  children?: any
}

const StyledButton = forwardRef(
  ({ color, variant, size, circular, iconOnly, children, ...rest }: Props, ref) => (
      // @ts-expect-error auto-src fix these on forwarding
      <StyledButtonRoot
        {...rest}
        // @ts-expect-error auto-src fix these on forwarding
        ref={ref}
        color="primary"
        ownerState={{ color, variant, size, circular, iconOnly, darkMode: false }}
        size={size}
        variant={variant === 'gradient' ? 'contained' : variant}>
        {children}
      </StyledButtonRoot>
    )
)

export default StyledButton
