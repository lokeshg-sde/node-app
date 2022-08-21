import React from 'react'

import { Div, Info, InfoText, TelePhone } from './styled'

export const Details = (): JSX.Element => (
  <Div>
    <Info>
      <InfoText>H.S.R Layout, Bangalore.</InfoText>
    </Info>
    <Info>
      <TelePhone>loke16779@gmail.com</TelePhone>
    </Info>
    <Info>
      <TelePhone href="tel:+91-8971069379">+91-8971069379</TelePhone>
    </Info>
  </Div>
)
