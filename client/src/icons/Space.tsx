import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

type Props = {
  color?: 'inherit' | 'disabled' | 'action' | 'primary' | 'secondary' | 'error'
}

export default function Space({ ...rest }: Props): JSX.Element {
  return (
    <SvgIcon {...rest} viewBox="0 0 16 20">
      <path d="M7 2V7H6V2H2V10H6V9H7V14H6V11H2V16H9V14H10V16H16V14H18V18H0V0H18V12H16V7H10V12H9V6H16V2H7Z" />
    </SvgIcon>
  )
}
