import { useState } from "react"
import { Link } from "react-router-dom"

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
        <StyledTypography variant="h4" fontWeight="medium" color="white" mt={1}>
          Sign in
        </StyledTypography>
        <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
          <Grid item xs={2}>
            <StyledTypography component={MuiLink} href="#" variant="body1" color="white">
              <FacebookIcon color="inherit" />
            </StyledTypography>
          </Grid>
          <Grid item xs={2}>
            <StyledTypography component={MuiLink} href="#" variant="body1" color="white">
              <GitHubIcon color="inherit" />
            </StyledTypography>
          </Grid>
          <Grid item xs={2}>
            <StyledTypography component={MuiLink} href="#" variant="body1" color="white">
              <GoogleIcon color="inherit" />
            </StyledTypography>
          </Grid>
        </Grid>
      </StyledBox>
      <StyledBox pt={4} pb={3} px={3}>
        <StyledBox component="form" role="form">
          <StyledBox mb={2}>
            <StyledInput type="email" label="Email" fullWidth />
          </StyledBox>
          <StyledBox mb={2}>
            <StyledInput type="password" label="Password" fullWidth />
          </StyledBox>
          <StyledBox display="flex" alignItems="center" ml={-1}>
            <Switch checked={rememberMe} onChange={handleSetRememberMe} />
            <StyledTypography
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
            <StyledButton variant="gradient" color="info" fullWidth>
              sign in
            </StyledButton>
          </StyledBox>
          <StyledBox mt={3} mb={1} textAlign="center">
            <StyledTypography variant="button" color="text">
              Don&apos;t have an account?{" "}
              <StyledTypography
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
  )
}

export default Basic