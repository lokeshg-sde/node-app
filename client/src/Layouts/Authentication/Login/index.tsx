import { useState } from "react"
// import { Link } from "react-router-dom"

import { Card, Grid, Link as MuiLink, Switch } from "@mui/material"
import {
  Facebook as FacebookIcon,
  GitHub as GitHubIcon,
  Google as GoogleIcon,
} from "@mui/icons-material"

import { StyledBox, StyledTypography, StyledInput, StyledButton } from "../../../components"

function Basic() {
  const [rememberMe, setRememberMe] = useState(false)

  const handleSetRememberMe = () => setRememberMe(!rememberMe)

  return (
    // @ts-expect-error auto-src fix these on forwarding
    <Card>
      {/* @ts-expect-error auto-src fix these on forwarding */}
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
        {/* @ts-expect-error auto-src fix these on forwarding */}
        <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
          {/* @ts-expect-error auto-src fix these on forwarding */}
          <Grid item xs={2}>
            {/* @ts-expect-error auto-src fix these on forwarding */}
            <StyledTypography component={MuiLink} href="#" variant="body1" color="white">
              {/* @ts-expect-error auto-src fix these on forwarding */}
              <FacebookIcon color="inherit" />
            </StyledTypography>
          </Grid>
          {/* @ts-expect-error auto-src fix these on forwarding */}
          <Grid item xs={2}>
            {/* @ts-expect-error auto-src fix these on forwarding */}
            <StyledTypography component={MuiLink} href="#" variant="body1" color="white">
              {/* @ts-expect-error auto-src fix these on forwarding */}
              <GitHubIcon color="inherit" />
            </StyledTypography>
          </Grid>
          {/* @ts-expect-error auto-src fix these on forwarding */}
          <Grid item xs={2}>
            {/* @ts-expect-error auto-src fix these on forwarding */}
            <StyledTypography component={MuiLink} href="#" variant="body1" color="white">
              {/* @ts-expect-error auto-src fix these on forwarding */}
              <GoogleIcon color="inherit" />
            </StyledTypography>
          </Grid>
        </Grid>
      </StyledBox>
      {/* @ts-expect-error auto-src fix these on forwarding */}
      <StyledBox pt={4} pb={3} px={3}>
        {/* @ts-expect-error auto-src fix these on forwarding */}
        <StyledBox component="form" role="form">
          {/* @ts-expect-error auto-src fix these on forwarding */}
          <StyledBox mb={2}>
            {/* @ts-expect-error auto-src fix these on forwarding */}
            <StyledInput type="email" label="Email" fullWidth />
          </StyledBox>
          {/* @ts-expect-error auto-src fix these on forwarding */}
          <StyledBox mb={2}>
            {/* @ts-expect-error auto-src fix these on forwarding */}
            <StyledInput type="password" label="Password" fullWidth />
          </StyledBox>
          {/* @ts-expect-error auto-src fix these on forwarding */}
          <StyledBox display="flex" alignItems="center" ml={-1}>
            {/* @ts-expect-error auto-src fix these on forwarding */}
            <Switch checked={rememberMe} onChange={handleSetRememberMe} />
            {/* @ts-expect-error auto-src fix these on forwarding */}
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
          {/* @ts-expect-error auto-src fix these on forwarding */}
          <StyledBox mt={4} mb={1}>
            {/* @ts-expect-error auto-src fix these on forwarding */}
            <StyledButton variant="gradient" color="info" fullWidth>
              sign in
            </StyledButton>
          </StyledBox>
          {/* @ts-expect-error auto-src fix these on forwarding */}
          <StyledBox mt={3} mb={1} textAlign="center">
            {/* @ts-expect-error auto-src fix these on forwarding */}
            <StyledTypography variant="button" color="text">
              Don&apos;t have an account? {/* @ts-expect-error auto-src fix these on forwarding */}
              <StyledTypography
                // @ts-expect-error auto-src fix these on forwarding
                component={MuiLink}
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
  )
}

export default Basic
