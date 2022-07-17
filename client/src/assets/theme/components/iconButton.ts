import { colors } from '../base'

const { transparent } = colors

const iconButton = {
  styleOverrides: {
    root: {
      '&:hover': {
        backgroundColor: transparent.main,
      },
    },
  },
}

export default iconButton
