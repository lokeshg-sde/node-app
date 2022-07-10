import React from "react"
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
      variant={variant}
      bgColor={bgColor}
      color={color}
      opacity={opacity}
      borderRadius={borderRadius}
      shadow={shadow}
      coloredShadow={coloredShadow}
    />
  )
)

MDBox.defaultProps = {
  variant: "contained",
  bgColor: "transparent",
  color: "dark",
  opacity: 1,
  borderRadius: "none",
  shadow: "none",
  coloredShadow: "none",
}

export default MDBox
