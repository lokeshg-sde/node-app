import React, { useMemo } from 'react'
import { Email, Done, ErrorOutline, QuestionMark } from '@mui/icons-material'
import type { ChangeEvent } from 'react'
import type { TextFieldProps } from '@mui/material'

import { TextField } from './components'

type Color = 'primary' | 'error' | 'success'

const Regex = {
  email: /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,8})$/,
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[#?!@$%,^&*-. ()<>:_,=+/])([a-zA-Z\d#?!@$%,^&*-. ()<>:_,=+/]{8,64})$/,
  // eslint-disable-next-line max-len
  url: /(https?:\/\/)?(www\.)[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)|(https?:\/\/)?(www\.)?(?!ww)[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/,
}

const RightIcons = {
  default: { icon: <QuestionMark sx={{ color: 'grey', fontSize: '2rem' }} />, color: 'primary' },
  valid: { icon: <Done sx={{ color: 'green', fontSize: '2rem' }} />, color: 'error' },
  error: { icon: <ErrorOutline sx={{ color: 'orange', fontSize: '2rem' }} />, color: 'success' },
}

type EmailProps = {
  value: string
  isError: boolean
  setValue: (val: string) => void
  setError: (val: boolean) => void
}

export const EmailField = ({ value, setValue, setError }: EmailProps): JSX.Element => {
  const OnChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const isValid = Regex.email.test(event.currentTarget.value as string)

    setError(isValid)
    setValue((event.currentTarget.value as string) || '')
  }

  const { icon, color } = useMemo(() => {
    if (!value) {
      return { ...RightIcons.default, icon: undefined }
    }

    return Regex.email.test(value) ? RightIcons.valid : RightIcons.error
  }, [value])

  return (
    <TextField
      color={color as Color}
      fullWidth
      iconEnd={icon}
      iconStart={<Email sx={{ color: 'orange', fontSize: '2rem' }} />}
      id="email"
      name="email"
      onBlur={OnChange}
      onChange={OnChange}
      placeholder="Email"
      required
      type="email"
      value={value}
    />
  )
}

type FieldProps = {
  value: string
  setValue: (val: string) => void
  key: string
  icon?: JSX.Element
  placeHolder: string
}

export const InputField = ({
  value,
  setValue,
  key,
  icon,
  placeHolder,
  ...props
}: FieldProps & TextFieldProps): JSX.Element => {
  const OnChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue((event.currentTarget.value as string) || '')
  }

  return (
    <TextField
      {...props}
      fullWidth
      iconStart={icon}
      id={key}
      name={key}
      onChange={OnChange}
      placeholder={placeHolder}
      required
      type="text"
      value={value}
    />
  )
}
