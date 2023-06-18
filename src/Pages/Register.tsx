import * as React from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { Google, Telegram } from "@mui/icons-material";

import "../css/Login.css";

export default function LoginPage() {

  const [pageActive, setPageActive] = React.useState(false);
  React.useEffect(() => {
    setPageActive(true);
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        minWidth: "100vw",
      }}
      className={`page ${pageActive ? "active" : ""}`}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <AccountCircle sx={{ fontSize: 80 }} />
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            sx={{ mt: 1, textAlign: "center" }}
            onSubmit={(e) => {
              e.preventDefault();
              console.log("submit");
            }}
          >
            <OwnTextField autoComplete="given-name" id="firstName" label="First Name" />
            <OwnTextField autoComplete="family-name" id="lastName" label="Last Name" />
            <OwnTextField autoComplete="email" id="email" label="Email Address" />
            <OwnTextField autoComplete="new-password" id="password" label="Password" />
            <OwnTextField autoComplete="new-password" id="confirmPassword" label="Confirm Password" />
            <Typography component="div" variant="body2" sx={{ mt: 2 }}>
              By clicking Sign Up, you agree to our{" "}
              <Link href="#" color="primary" underline="always">
                Terms and Conditions
              </Link>
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign up
            </Button>
          </Box>
          <Typography component="h2" variant="h6" sx={{ mt: 4 }}>
            Or sign up with
          </Typography>
          <SignUpOptions />
          <Typography component="h2" variant="h6" sx={{ mt: 2 }}>
            Already have an account?{" "}
            <Button
              onClick={() => {
                window.location.href = "/login";
              }}
              color="primary"
              component="a"
              href="#"
              sx={{ fontWeight: "bold" }}
            >
              Sign in
            </Button>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

function MicrosoftIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 23 23"
    >
      <path fill="transparent" d="M0 0h23v23H0z" />
      <path fill="#fff" className="ms-icon-fill" d="M1 1h10v10H1z" />
      <path fill="#fff" className="ms-icon-fill" d="M12 1h10v10H12z" />
      <path fill="#fff" className="ms-icon-fill" d="M1 12h10v10H1z" />
      <path fill="#fff" className="ms-icon-fill" d="M12 12h10v10H12z" />
    </svg>
  );
}


function OwnTextField({id, label, autoComplete}: {id: string, label: string, autoComplete: string}) {
  let type = "text";
  switch(id) {
    case "email": type = "email"; break;
    case "password": case "confirmPassword": type = "password"; break;
  }
  return <TextField
  margin="normal"
  required
  fullWidth
  id={id}
  type={type}
  label={label}
  name={id}
  autoComplete={autoComplete}
  autoFocus
/>
}

function SignUpOptions() {
  return <Box
  sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", marginTop: 2 }}
>
  <IconButton
    color="primary"
    title="Mit Google-Account anmelden"
    aria-label="Sign up with Google"
    component="a"
    href="#"
    size="large"
    sx={{
      bgcolor: "primary.main",
      color: "primary.contrastText",
      mr: 2,
      mb: 2,
    }}
  >
    <Google />
  </IconButton>
  <IconButton
    color="primary"
    title="Mit Microsoft-Account anmelden"
    aria-label="Sign up with Microsoft"
    component="a"
    className="css-microsoft-svg"
    href="#"
    size="large"
    sx={{
      bgcolor: "primary.main",
      color: "primary.contrastText",
      mr: 2,
      mb: 2,
    }}
  >
    <MicrosoftIcon />
  </IconButton>
  <IconButton
    color="primary"
    title="Mit Telegram-Account anmelden"
    aria-label="Sign up with Telegram"
    component="a"
    href="#"
    size="large"
    sx={{
      bgcolor: "primary.main",
      color: "primary.contrastText",
      mb: 2,
    }}
  >
    <Telegram />
  </IconButton>
</Box>
}