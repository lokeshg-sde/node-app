import React from 'react'
import { InputAdornment } from '@mui/material'
import { AccountCircle } from '@mui/icons-material'
import type { TextFieldProps } from '@mui/material'

import { InfoText, HeaderText, TextWrapper, StyledTextField } from './styled'

export const Details = ({ text }: { text: string }): JSX.Element => (
  <>
    <AccountCircle
      color="primary"
      style={{
        width: '3rem',
        height: '3rem',
      }}
    />
    <InfoText>{text}</InfoText>
  </>
)

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
