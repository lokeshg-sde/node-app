import React from 'react'
import Grid from '@mui/material/Grid'
import { JsxElement } from 'typescript'

import { StyledBox, PageLayout } from '../../../components'
import bgImage from '../../../assets/images/login-cover-page.png'

type Props = {
  image?: string
  children?: JsxElement | JsxElement[]
}

export const BasicLayout = ({ image, children }: Props): JSX.Element => {
  return (
    <PageLayout>
      <StyledBox
        position="absolute"
        width="100%"
        minHeight="100vh"
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
      />
      <StyledBox px={1} width="100%" height="100vh" mx="auto">
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            {children}
          </Grid>
        </Grid>
      </StyledBox>
    </PageLayout>
  )
}
