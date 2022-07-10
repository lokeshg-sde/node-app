import { forwardRef } from "react"

import StyledButtonRoot from "./Button"

type Props = {
  size: "small" | "medium" | "large"
  variant: "text" | "contained" | "outlined" | "gradient"
  color:
    | "white"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "light"
    | "dark"
  circular: boolean
  iconOnly: boolean
  children?: any
}

const StyledButton = forwardRef(
  ({ color, variant, size, circular, iconOnly, children, ...rest }: Props, ref) => {
    return (
      // @ts-expect-error auto-src fix these on forwarding
      <StyledButtonRoot
        {...rest}
        // @ts-expect-error auto-src fix these on forwarding
        ref={ref}
        color="primary"
        variant={variant === "gradient" ? "contained" : variant}
        size={size}
        ownerState={{ color, variant, size, circular, iconOnly, darkMode: false }}
      >
        {children}
      </StyledButtonRoot>
    )
  }
)

export default StyledButton
