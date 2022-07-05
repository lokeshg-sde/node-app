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
  children: Node
}

const StyledButton = forwardRef(
  ({ color, variant, size, circular, iconOnly, children, ...rest }: Props, ref) => {
    return (
      <StyledButtonRoot
        {...rest}
        ref={ref}
        color="primary"
        variant={variant === 'gradient' ? 'contained' : variant}
        size={size}
        ownerState={{ color, variant, size, circular, iconOnly, darkMode: false }}>
        {children}
      </StyledButtonRoot>
    )
  }
)

export default StyledButton
