import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

// @ts-expect-error auto-src fix these on forwarding
export default styled(Typography)(({ theme, ownerState }) => {
  // @ts-expect-error auto-src fix these on forwarding
  const { palette, typography, functions } = theme
  const { color, textTransform, verticalAlign, fontWeight, opacity, textGradient, darkMode } =
    ownerState

  // @ts-expect-error auto-src fix these on forwarding
  const { gradients, transparent, white } = palette
  const { fontWeightLight, fontWeightRegular, fontWeightMedium, fontWeightBold } = typography
  const { linearGradient } = functions

  const fontWeights = {
    light: fontWeightLight,
    regular: fontWeightRegular,
    medium: fontWeightMedium,
    bold: fontWeightBold,
  }

  const gradientStyles = () => ({
    backgroundImage:
      color !== 'inherit' && color !== 'text' && color !== 'white' && gradients[color]
        ? linearGradient(gradients[color].main, gradients[color].state)
        : linearGradient(gradients.dark.main, gradients.dark.state),
    display: 'inline-block',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: transparent.main,
    position: 'relative',
    zIndex: 1,
  })

  // @ts-expect-error auto-src fix these on forwarding
  let colorValue = color === 'inherit' || !palette[color] ? 'inherit' : palette[color].main

  // @ts-expect-error auto-src fix these on forwarding
  if (darkMode && (color === 'inherit' || !palette[color])) {
    colorValue = 'inherit'
  } else if (darkMode && color === 'dark') {colorValue = white.main}

  return {
    opacity,
    textTransform,
    verticalAlign,
    textDecoration: 'none',
    color: colorValue,
    // @ts-expect-error auto-src fix these on forwarding
    fontWeight: fontWeights[fontWeight] && fontWeights[fontWeight],
    ...(textGradient && gradientStyles()),
  }
})
