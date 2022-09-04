import React from 'react'
import { InputAdornment } from '@mui/material'
import type { TextFieldProps } from '@mui/material'
import { LocationCity, Email, Phone } from '@mui/icons-material'

import { InfoText, HeaderText, TextWrapper, StyledTextField } from './styled'

const Icons = {
  0: LocationCity,
  1: Email,
  2: Phone,
}

export const Details = ({
  text,
  iconValue,
}: {
  text: string
  iconValue: 0 | 1 | 2
}): JSX.Element => {
  const Icon = Icons[iconValue]

  return (
    <>
      <Icon
        color="primary"
        style={{
          width: '3rem',
          height: '3rem',
        }}
      />
      <InfoText>{text}</InfoText>
    </>
  )
}

export const Header = (): JSX.Element => (
  <HeaderText>
    <TextWrapper>
      I am available to work on your Organization/Projects and bring your ideas to life. I am just a
      click away.
    </TextWrapper>
  </HeaderText>
)

const InputIcon = ({ icon, position }: { icon: JSX.Element; position: 'start' | 'end' }) => (
  <InputAdornment position={position}>{icon}</InputAdornment>
)

type Props = TextFieldProps & { iconStart?: JSX.Element; iconEnd?: JSX.Element }

export const TextField = ({ iconStart, iconEnd, InputProps, ...props }: Props): JSX.Element => (
  <StyledTextField
    {...props}
    InputProps={{
      ...InputProps,
      startAdornment: iconStart ? <InputIcon icon={iconStart} position="start" /> : null,
      endAdornment: iconEnd ? <InputIcon icon={iconEnd} position="end" /> : null,
    }}
  />
)
