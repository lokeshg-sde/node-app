import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Checkbox } from '@mui/material'

import { StyledBox, StyledTypography, StyledInput, StyledButton } from '../../../components'
import { BasicLayout } from '../components/BasicLayout'

export function SignUp(): JSX.Element {
  return (
    <BasicLayout>
      {/* @ts-expect-error FIXME */}
      <Card>
        <StyledBox
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mb={1}
          mt={-3}
          mx={2}
          p={3}
          textAlign="center"
          variant="gradient"
        >
          {/* @ts-expect-error FIXME */}
          <StyledTypography color="white" fontWeight="medium" mt={1} variant="h4">
            Join us today
          </StyledTypography>
          {/* @ts-expect-error FIXME */}
          <StyledTypography color="white" display="block" my={1} variant="button">
            Enter your email and password to register
          </StyledTypography>
        </StyledBox>
        <StyledBox pb={3} pt={4} px={3}>
          <StyledBox component="form" role="form">
            <StyledBox mb={2}>
              {/* @ts-expect-error FIXME */}
              <StyledInput fullWidth label="Name" type="text" variant="standard" />
            </StyledBox>
            <StyledBox mb={2}>
              {/* @ts-expect-error FIXME */}
              <StyledInput fullWidth label="Email" type="email" variant="standard" />
            </StyledBox>
            <StyledBox mb={2}>
              {/* @ts-expect-error FIXME */}
              <StyledInput fullWidth label="Password" type="password" variant="standard" />
            </StyledBox>
            <StyledBox alignItems="center" display="flex" ml={-1}>
              <Checkbox />
              <StyledTypography
                color="text"
                fontWeight="regular"
                //   @ts-expect-error FIXME
                sx={{ cursor: 'pointer', userSelect: 'none', ml: -1 }}
                variant="button"
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </StyledTypography>
              <StyledTypography
                color="info"
                //    @ts-expect-error FIXME
                component="a"
                fontWeight="bold"
                href="#"
                textGradient
                variant="button"
              >
                Terms and Conditions
              </StyledTypography>
            </StyledBox>
            <StyledBox mb={1} mt={4}>
              {/* @ts-expect-error FIXME */}
              <StyledButton color="info" fullWidth variant="gradient">
                sign in
              </StyledButton>
            </StyledBox>
            <StyledBox mb={1} mt={3} textAlign="center">
              {/* @ts-expect-error FIXME */}
              <StyledTypography color="text" variant="button">
                Already have an account?{' '}
                <StyledTypography
                  color="info"
                  // @ts-expect-error FIXME
                  component={Link}
                  fontWeight="medium"
                  textGradient
                  to="users/login"
                  variant="button"
                >
                  Sign In
                </StyledTypography>
              </StyledTypography>
            </StyledBox>
          </StyledBox>
        </StyledBox>
      </Card>
    </BasicLayout>
  )
}
