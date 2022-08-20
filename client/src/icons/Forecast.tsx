import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

type Props = {
  color?: 'inherit' | 'disabled' | 'action' | 'primary' | 'secondary' | 'error'
}

export default function Forecast({ color, ...rest }: Props): JSX.Element {
  return (
    <SvgIcon color={color} {...rest} viewBox="0 0 19 19">
      {/* eslint-disable-next-line max-len */}
      <path d="M3 13.5L0 16.44V8H3V13.5ZM8 11.66L6.43 10.32L5 11.64V4H8V11.66ZM13 10L10 13V0H13V10ZM15.81 9.81L14 8H19V13L17.21 11.21L10 18.36L6.53 15.34L2.75 19H0L6.47 12.66L10 15.64" />
    </SvgIcon>
  )
}
