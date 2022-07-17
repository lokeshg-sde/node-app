import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Checkbox } from '@mui/material'

import { StyledBox, StyledTypography, StyledInput, StyledButton } from '../../../components'
import { BasicLayout } from '../components/BasicLayout'

export function SignUp() {
  return (
    <BasicLayout>
      {/* @ts-expect-error */}
      <Card>
        <StyledBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center">
          {/* @ts-expect-error */}
          <StyledTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </StyledTypography>
          {/* @ts-expect-error */}
          <StyledTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </StyledTypography>
        </StyledBox>
        <StyledBox pt={4} pb={3} px={3}>
          <StyledBox component="form" role="form">
            <StyledBox mb={2}>
              {/* @ts-expect-error */}
              <StyledInput type="text" label="Name" variant="standard" fullWidth />
            </StyledBox>
            <StyledBox mb={2}>
              {/* @ts-expect-error */}
              <StyledInput type="email" label="Email" variant="standard" fullWidth />
            </StyledBox>
            <StyledBox mb={2}>
              {/* @ts-expect-error */}
              <StyledInput type="password" label="Password" variant="standard" fullWidth />
            </StyledBox>
            <StyledBox display="flex" alignItems="center" ml={-1}>
              <Checkbox />
              <StyledTypography
                //   @ts-expect-error
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: 'pointer', userSelect: 'none', ml: -1 }}>
                &nbsp;&nbsp;I agree the&nbsp;
              </StyledTypography>
              <StyledTypography
                //    @ts-expect-error
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient>
                Terms and Conditions
              </StyledTypography>
            </StyledBox>
            <StyledBox mt={4} mb={1}>
              {/* @ts-expect-error */}
              <StyledButton variant="gradient" color="info" fullWidth>
                sign in
              </StyledButton>
            </StyledBox>
            <StyledBox mt={3} mb={1} textAlign="center">
              {/* @ts-expect-error */}
              <StyledTypography variant="button" color="text">
                Already have an account?{' '}
                <StyledTypography
                  // @ts-expect-error
                  component={Link}
                  to="users/login"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient>
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
