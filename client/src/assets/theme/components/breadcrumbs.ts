import { colors, typography } from "../base"

const { grey } = colors
const { size } = typography

const breadcrumbs = {
  styleOverrides: {
    li: {
      lineHeight: 0,
    },

    separator: {
      fontSize: size.sm,
      color: grey[600],
    },
  },
}

export default breadcrumbs
