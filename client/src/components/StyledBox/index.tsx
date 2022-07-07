import { forwardRef } from "react"

import MDBoxRoot from "./Box"

type Props = {
  variant: "contained" | "gradient"
  bgColor: string
  color: string
  opacity: number
  borderRadius: string
  shadow: string
  coloredShadow:
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "light"
    | "dark"
    | "none"
    
}

const MDBox = forwardRef(
  (
    { variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow, ...rest }: Props,
    ref
  ) => (
    <MDBoxRoot
      {...rest}
      ref={ref}
      ownerState={{
        variant,
        bgColor,
        color,
        opacity,
        borderRadius,
        shadow,
        coloredShadow,
      }}
    />
  )
)

export default MDBox
