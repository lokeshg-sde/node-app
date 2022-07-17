import { colors, typography, borders } from '../../base'
import { pxToRem } from '../../functions'

const { inputBorderColor, info, grey, transparent } = colors
const { borderRadius } = borders
const { size } = typography

const inputOutlined = {
  styleOverrides: {
    root: {
      backgroundColor: transparent.main,
      fontSize: size.sm,
      borderRadius: borderRadius.md,

      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: inputBorderColor,
      },

      '&.Mui-focused': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: info.main,
        },
      },
    },

    notchedOutline: {
      borderColor: inputBorderColor,
    },

    input: {
      color: grey[700],
      padding: pxToRem(12),
      backgroundColor: transparent.main,
    },

    inputSizeSmall: {
      fontSize: size.xs,
      padding: pxToRem(10),
    },

    multiline: {
      color: grey[700],
      padding: 0,
    },
  },
}

export default inputOutlined
