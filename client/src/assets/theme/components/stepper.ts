import { colors, typography, borders, boxShadows } from '../base'
import { boxShadow, pxToRem, linearGradient, rgba } from '../functions'

const { transparent, gradients, white } = colors
const { borderRadius, borderWidth } = borders
const { colored } = boxShadows
const { size, fontWeightRegular } = typography

export const stepper = {
  styleOverrides: {
    root: {
      background: linearGradient(gradients.info.main, gradients.info.state),
      padding: `${pxToRem(24)} 0 ${pxToRem(16)}`,
      borderRadius: borderRadius.lg,
      boxShadow: colored.info,

      '&.MuiPaper-root': {
        backgroundColor: transparent.main
      }
    }
  }
}

export const step = {
  styleOverrides: {
    root: {
      padding: `0 ${pxToRem(6)}`
    }
  }
}

export const stepConnector = {
  styleOverrides: {
    root: {
      color: '#9fc9ff',
      transition: 'all 200ms linear',

      '&.Mui-active': {
        color: white.main
      },

      '&.Mui-completed': {
        color: white.main
      }
    },

    alternativeLabel: {
      top: '14%',
      left: '-50%',
      right: '50%'
    },

    line: {
      borderWidth: `${borderWidth[2]} !important`,
      borderColor: 'currentColor',
      opacity: 0.5
    }
  }
}

export const stepIcon = {
  styleOverrides: {
    root: {
      background: '#9fc9ff',
      fill: '#9fc9ff',
      stroke: '#9fc9ff',
      strokeWidth: pxToRem(10),
      width: pxToRem(13),
      height: pxToRem(13),
      borderRadius: '50%',
      zIndex: 99,
      transition: 'all 200ms linear',

      '&.Mui-active': {
        background: white.main,
        fill: white.main,
        stroke: white.main,
        borderColor: white.main,
        boxShadow: boxShadow([0, 0], [0, 2], white.main, 1)
      },

      '&.Mui-completed': {
        background: white.main,
        fill: white.main,
        stroke: white.main,
        borderColor: white.main,
        boxShadow: boxShadow([0, 0], [0, 2], white.main, 1)
      }
    }
  }
}

export const stepLabel = {
  styleOverrides: {
    label: {
      marginTop: `${pxToRem(8)} !important`,
      fontWeight: fontWeightRegular,
      fontSize: size.xs,
      color: '#9fc9ff',
      textTransform: 'uppercase',

      '&.Mui-active': {
        fontWeight: `${fontWeightRegular} !important`,
        color: `${rgba(white.main, 0.8)} !important`
      },

      '&.Mui-completed': {
        fontWeight: `${fontWeightRegular} !important`,
        color: `${rgba(white.main, 0.8)} !important`
      }
    }
  }
}
