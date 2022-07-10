import React from "react"
import { forwardRef } from "react"
import type { BoxProps } from "@mui/material"
import BoxRoot from "./Box"

type Props = Partial<{
  variant: "contained" | "gradient"
  bgColor: string
  color: string
  children?: JSX.Element | JSX.Element[]
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
      ref={ref}
      variant={variant || "contained"}
      bgColor={bgColor || "transparent"}
      color={color || "dark"}
      opacity={opacity || 1}
      borderRadius={borderRadius || "none"}
      shadow={shadow || "none"}
      coloredShadow={coloredShadow || "none"}
    >
      {children}
    </BoxRoot>
  )
)

export default StyledBox
