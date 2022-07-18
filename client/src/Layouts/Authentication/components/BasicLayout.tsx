import React from 'react'
import Grid from '@mui/material/Grid'
import type { JsxElement } from 'typescript'

import { StyledBox, PageLayout } from '../../../components'
import bgImage from '../../../assets/images/login-cover-page.png'

type Props = {
  image?: string
  children?: JsxElement | JsxElement[]
}

export const BasicLayout = ({ image, children }: Props): JSX.Element => (
  <PageLayout>
    <StyledBox
      minHeight="100vh"
      position="absolute"
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }: any) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.6),
            rgba(gradients.dark.state, 0.6)
          )}, url(${image || bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      width="100%"
    />
    <StyledBox height="100vh" mx="auto" px={1} width="100%">
      <Grid alignItems="center" container height="100%" justifyContent="center" spacing={1}>
        <Grid item lg={4} md={5} sm={9} xl={3} xs={11}>
          {children}
        </Grid>
      </Grid>
    </StyledBox>
  </PageLayout>
)
