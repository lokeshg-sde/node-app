import { borders } from '../base'

const { borderRadius } = borders

const avatar = {
  styleOverrides: {
    root: {
      transition: 'all 200ms ease-in-out'
    },

    rounded: {
      borderRadius: borderRadius.lg
    },

    img: {
      height: 'auto'
    }
  }
}

export default avatar
