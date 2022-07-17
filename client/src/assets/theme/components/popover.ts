import { pxToRem } from '../functions'

import { colors, boxShadows, borders } from '../base'

const { transparent } = colors
const { lg } = boxShadows
const { borderRadius } = borders

const popover = {
  styleOverrides: {
    paper: {
      backgroundColor: transparent.main,
      boxShadow: lg,
      padding: pxToRem(8),
      borderRadius: borderRadius.md,
    },
  },
}

export default popover
