import { borders, boxShadows, colors, typography } from '../base'
import { pxToRem } from '../functions'

const { lg } = boxShadows
const { size } = typography
const { text, white, dark, light } = colors
const { borderRadius } = borders

export const menu = {
  defaultProps: {
    disableAutoFocusItem: true
  },

  styleOverrides: {
    paper: {
      minWidth: pxToRem(160),
      boxShadow: lg,
      padding: `${pxToRem(16)} ${pxToRem(8)}`,
      fontSize: size.sm,
      color: text.main,
      textAlign: 'left',
      backgroundColor: `${white.main} !important`,
      borderRadius: borderRadius.md
    }
  }
}

export const menuItem = {
  styleOverrides: {
    root: {
      minWidth: pxToRem(160),
      minHeight: 'unset',
      padding: `${pxToRem(4.8)} ${pxToRem(16)}`,
      borderRadius: borderRadius.md,
      fontSize: size.sm,
      color: text.main,
      transition: 'background-color 300ms ease, color 300ms ease',

      '&:hover, &:focus, &.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus': {
        backgroundColor: light.main,
        color: dark.main
      }
    }
  }
}

export default menu
