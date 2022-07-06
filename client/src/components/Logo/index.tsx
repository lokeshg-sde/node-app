/* eslint-disable jsx-a11y/alt-text */
import React from "react"
// import SvgIcon from '@material-ui/core/SvgIcon'
import useStyles from "./styles"
import Icon from "@material-ui/core/Icon"

type Props = {
  product?: "Portfolio" | "My Cart"
  productType?: ""
  textStyle?: React.CSSProperties
}

const LOGO = ({ product, textStyle }: Props): JSX.Element => {
  const classes = useStyles()

  return (
    <div className={classes.brandContainer}>
      <Icon classes={{ root: classes.icon }}>
        <img src="./favicon.ico" />
      </Icon>
      <span className={classes.text} style={textStyle}>
        {product}
      </span>
    </div>
  )
}

export default LOGO
