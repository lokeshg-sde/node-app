import Box from '@mui/material/Box'
import type { ThemeOptions } from '@mui/material/styles'
import { styled } from '@mui/material/styles'
import type { BoxProps } from '@mui/material'

type Props = {
  variant: 'contained' | 'gradient'
  bgColor: string
  color: string
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
}

export default styled(Box)<Props & BoxProps>(
  ({
    variant,
    bgColor,
    color,
    opacity,
    borderRadius,
    shadow,
    coloredShadow,
    theme,
  }: // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Props & { theme: any }) => {
    // @ts-expect-error auto-src fix these on forwarding
    const { palette, functions, borders, boxShadows } = theme as ThemeOptions

    // @ts-expect-error auto-src fix these on forwarding
    const { gradients, grey, white } = palette
    const { linearGradient } = functions
    const { borderRadius: radius } = borders
    const { colored } = boxShadows

    const greyColors = {
      'grey-100': grey[100],
      'grey-200': grey[200],
      'grey-300': grey[300],
      'grey-400': grey[400],
      'grey-500': grey[500],
      'grey-600': grey[600],
      'grey-700': grey[700],
      'grey-800': grey[800],
      'grey-900': grey[900],
    }

    const validGradients = [
      'primary',
      'secondary',
      'info',
      'success',
      'warning',
      'error',
      'dark',
      'light',
    ]

    const validColors = [
      'transparent',
      'white',
      'black',
      'primary',
      'secondary',
      'info',
      'success',
      'warning',
      'error',
      'light',
      'dark',
      'text',
      'grey-100',
      'grey-200',
      'grey-300',
      'grey-400',
      'grey-500',
      'grey-600',
      'grey-700',
      'grey-800',
      'grey-900',
    ]

    const validBorderRadius = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'section']
    const validBoxShadows = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'inset']

    // background value
    let backgroundValue = bgColor

    if (variant === 'gradient') {
      backgroundValue = validGradients.find((el) => el === bgColor)
        ? linearGradient(gradients[bgColor].main, gradients[bgColor].state)
        : white.main
    } else if (validColors.find((el) => el === bgColor)) {
      // @ts-expect-error auto-src fix these on forwarding
      backgroundValue = palette[bgColor] ? palette[bgColor].main : greyColors[bgColor]
    } else {
      backgroundValue = bgColor
    }

    // color value
    let colorValue = color

    if (validColors.find((el) => el === color)) {
      // @ts-expect-error auto-src fix these on forwarding
      colorValue = palette[color] ? palette[color].main : greyColors[color]
    }

    // borderRadius value
    let borderRadiusValue = borderRadius

    if (validBorderRadius.find((el) => el === borderRadius)) {
      borderRadiusValue = radius[borderRadius]
    }

    // boxShadow value
    let boxShadowValue = 'none'

    if (validBoxShadows.find((el) => el === shadow)) {
      boxShadowValue = boxShadows[shadow]
    } else if (coloredShadow) {
      boxShadowValue = colored[coloredShadow] ? colored[coloredShadow] : 'none'
    }

    return {
      opacity,
      background: backgroundValue,
      color: colorValue,
      borderRadius: borderRadiusValue,
      boxShadow: boxShadowValue,
    }
  }
)
