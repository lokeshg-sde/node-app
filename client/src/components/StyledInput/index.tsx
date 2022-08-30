import React, { forwardRef } from 'react'

import InputRoot from './Input'

type Props = {
  error: boolean
  success: boolean
  disabled: boolean
}

const Input = forwardRef(({ error, success, disabled, ...rest }: Props, ref) => (
  // @ts-expect-error auto-src fix these on forwarding
  <InputRoot {...rest} ownerState={{ error, success, disabled }} ref={ref} />
))

export default Input
