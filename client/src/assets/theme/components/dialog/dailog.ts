import { colors, typography, borders, boxShadows } from '../../base'
import { pxToRem } from '../../functions'

const { borderRadius, borderWidth, borderColor } = borders
const { xxl } = boxShadows
const { text } = colors
const { size } = typography

export const dialog = {
  styleOverrides: {
    paper: {
      borderRadius: borderRadius.lg,
      boxShadow: xxl
    },

    paperFullScreen: {
      borderRadius: 0
    }
  }
}

export const dialogActions = {
  styleOverrides: {
    root: {
      padding: pxToRem(16)
    }
  }
}

export const dialogContent = {
  styleOverrides: {
    root: {
      padding: pxToRem(16),
      fontSize: size.md,
      color: text.main
    },

    dividers: {
      borderTop: `${borderWidth[1]} solid ${borderColor}`,
      borderBottom: `${borderWidth[1]} solid ${borderColor}`
    }
  }
}

export const dialogContentText = {
  styleOverrides: {
    root: {
      fontSize: size.md,
      color: text.main
    }
  }
}

export const dialogTitle = {
  styleOverrides: {
    root: {
      padding: pxToRem(16),
      fontSize: size.xl
    }
  }
}
