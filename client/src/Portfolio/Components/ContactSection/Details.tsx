import React from 'react'

import { AccountCircle } from '@mui/icons-material'
import { InfoText } from './styled'

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
