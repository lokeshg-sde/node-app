import React from "react"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

import { Card, Grid, Link as MuiLink, Switch } from "@mui/material"
import {
  Facebook as FacebookIcon,
  GitHub as GitHubIcon,
  Google as GoogleIcon,
} from "@mui/icons-material"

import { StyledBox, StyledTypography, StyledInput, StyledButton } from "../../../components"
import { BasicLayout } from "../components/BasicLayout"

function Basic() {
  const [rememberMe, setRememberMe] = useState(false)
  const {} = useLocation()

  const [values, setValues] = useState({})

  const handleSetRememberMe = () => setRememberMe(!rememberMe)

  const handleOnChange = (event: InputEvent) => {
    // event.target.value

    setValues({
      ...values,
      // @ts-expect-error
      [event.target.name]: event.target.value,
    })
  }

  const handleOnSubmit = () => {
    // event?.preventDefault()

    console.log(values)
  }

  return (
    <BasicLayout>
      {/* @ts-expect-error auto-src fix these on forwarding */}
      <Card>
        <StyledBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          {/* @ts-expect-error auto-src fix these on forwarding */}
          <StyledTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </StyledTypography>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={2}>
              {/* @ts-expect-error auto-src fix these on forwarding */}
              <StyledTypography component={MuiLink} href="#" variant="body1" color="white">
                <FacebookIcon color="inherit" />
              </StyledTypography>
            </Grid>
            <Grid item xs={2}>
              {/* @ts-expect-error auto-src fix these on forwarding */}
              <StyledTypography component={MuiLink} href="#" variant="body1" color="white">
                <GitHubIcon color="inherit" />
              </StyledTypography>
            </Grid>
            <Grid item xs={2}>
              {/* @ts-expect-error auto-src fix these on forwarding */}
              <StyledTypography component={MuiLink} href="#" variant="body1" color="white">
                <GoogleIcon color="inherit" />
              </StyledTypography>
            </Grid>
          </Grid>
        </StyledBox>
        <StyledBox pt={4} pb={3} px={3}>
          <StyledBox>
            <form
              action="http://localhost:4000/users/login"
              method="POST"
              onSubmit={handleOnSubmit}
            >
              <StyledBox mb={2}>
                <StyledInput
                  // @ts-expect-error
                  onChange={handleOnChange}
                  name="email"
                  type="email"
                  label="Email"
                  fullWidth
                />
              </StyledBox>
              <StyledBox mb={2}>
                <StyledInput
                  // @ts-expect-error
                  onChange={handleOnChange}
                  name="password"
                  type="password"
                  label="Password"
                  fullWidth
                />
              </StyledBox>
              <StyledBox display="flex" alignItems="center" ml={-1}>
                <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                <StyledTypography
                  // @ts-expect-error auto-src fix these on forwarding
                  variant="button"
                  fontWeight="regular"
                  color="text"
                  onClick={handleSetRememberMe}
                  sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                >
                  &nbsp;&nbsp;Remember me
                </StyledTypography>
              </StyledBox>
              <StyledBox mt={4} mb={1}>
                {/* @ts-expect-error auto-src fix these on forwarding */}
                <StyledButton type="submit" variant="gradient" color="info" fullWidth>
                  sign in
                </StyledButton>
              </StyledBox>
            </form>
            <StyledBox mt={3} mb={1} textAlign="center">
              {/* @ts-expect-error auto-src fix these on forwarding */}
              <StyledTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <StyledTypography
                  // @ts-expect-error auto-src fix these on forwarding
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
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
