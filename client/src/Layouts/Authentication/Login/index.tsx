import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Grid, Link as MuiLink, Switch } from '@mui/material'
import {
  Facebook as FacebookIcon,
  GitHub as GitHubIcon,
  Google as GoogleIcon,
} from '@mui/icons-material'

import { getApiConfig } from '../../../utils/getApiConfig'
import { StyledBox, StyledTypography, StyledInput, StyledButton } from '../../../components'
import { BasicLayout } from '../components/BasicLayout'

function Basic(): JSX.Element {
  const [rememberMe, setRememberMe] = useState(false)

  const [values, setValues] = useState({})
  const source = getApiConfig()

  const handleSetRememberMe = () => setRememberMe(!rememberMe)

  const handleOnChange = (event: InputEvent) => {
    // event.target.value

    setValues({
      ...values,
      // @ts-expect-error FIXME
      [event.target.name]: event.target.value,
    })
  }

  const handleOnSubmit = async () => {
    const url = `${source}/users/login`
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': window.origin,
        mode: 'no-cors',
      },
      body: JSON.stringify(values),
    }

    const response = await fetch(url, options)
    const result = await response.json()

    // eslint-disable-next-line no-alert
    alert(JSON.stringify(result))
    console.log(result)
  }

  return (
    <BasicLayout>
      {/* @ts-expect-error auto-src fix these on forwarding */}
      <Card>
        <StyledBox
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mb={1}
          mt={-3}
          mx={2}
          p={2}
          textAlign="center"
          variant="gradient"
        >
          {/* @ts-expect-error auto-src fix these on forwarding */}
          <StyledTypography color="white" fontWeight="medium" mt={1} variant="h4">
            Welcome
          </StyledTypography>
          <Grid container justifyContent="center" spacing={3} sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={2}>
              {/* @ts-expect-error auto-src fix these on forwarding */}
              <StyledTypography color="white" component={MuiLink} href="#" variant="body1">
                <FacebookIcon color="inherit" />
              </StyledTypography>
            </Grid>
            <Grid item xs={2}>
              {/* @ts-expect-error auto-src fix these on forwarding */}
              <StyledTypography color="white" component={MuiLink} href="#" variant="body1">
                <GitHubIcon color="inherit" />
              </StyledTypography>
            </Grid>
            <Grid item xs={2}>
              {/* @ts-expect-error auto-src fix these on forwarding */}
              <StyledTypography color="white" component={MuiLink} href="#" variant="body1">
                <GoogleIcon color="inherit" />
              </StyledTypography>
            </Grid>
          </Grid>
        </StyledBox>
        <StyledBox pb={3} pt={4} px={3}>
          <StyledBox>
            {/* onSubmit={handleOnSubmit} */}
            <form>
              <StyledBox mb={2}>
                <StyledInput
                  // @ts-expect-error FIXME
                  fullWidth
                  label="Email"
                  name="email"
                  onChange={handleOnChange}
                  type="email"
                />
              </StyledBox>
              <StyledBox mb={2}>
                <StyledInput
                  // @ts-expect-error FIXME
                  fullWidth
                  label="Password"
                  name="password"
                  onChange={handleOnChange}
                  type="password"
                />
              </StyledBox>
              <StyledBox alignItems="center" display="flex" ml={-1}>
                <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                <StyledTypography
                  color="text"
                  fontWeight="regular"
                  // @ts-expect-error auto-src fix these on forwarding
                  onClick={handleSetRememberMe}
                  sx={{ cursor: 'pointer', userSelect: 'none', ml: -1 }}
                  variant="button"
                >
                  &nbsp;&nbsp;Remember me
                </StyledTypography>
              </StyledBox>
              <StyledBox mb={1} mt={4}>
                {/* @ts-expect-error auto-src fix these on forwarding */}
                <StyledButton color="info" fullWidth onClick={handleOnSubmit} variant="gradient">
                  sign in
                </StyledButton>
              </StyledBox>
            </form>
            <StyledBox mb={1} mt={3} textAlign="center">
              {/* @ts-expect-error auto-src fix these on forwarding */}
              <StyledTypography color="text" variant="button">
                Don&apos;t have an account?{' '}
                <StyledTypography
                  color="info"
                  // @ts-expect-error auto-src fix these on forwarding
                  component={Link}
                  fontWeight="medium"
                  textGradient
                  to="users/register"
                  variant="button"
                >
                  Sign up
                </StyledTypography>
              </StyledTypography>
            </StyledBox>
          </StyledBox>
        </StyledBox>
      </Card>
    </BasicLayout>
  )
}

export default Basic
