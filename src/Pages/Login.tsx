import * as React from "react";
import { useAsync } from "react-async"
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { Google, Telegram } from "@mui/icons-material";
import TestPic1 from "../assets/testpic1.jpg";
import { useCustomGoogleOneTapLogin } from "../components/Login/Google";

import "../css/Login.css";
import { GoogleOAuthProvider, TokenResponse, useGoogleLogin, hasGrantedAnyScopeGoogle } from "@react-oauth/google";
import api, { googleapi, setGoogleToken } from "../ts/net";

type iGoogleInfo = Omit<TokenResponse, "error" | "error_description" | "error_uri">;

export default function LoginPage() {
  const [pageActive, setPageActive] = React.useState(false);
  const [pageUnload, setPageUnload] = React.useState(false);

  const [loginSuccessProgress, setLoginSuccessProgress] = React.useState(100);
  const [loginSuccess, setLoginSuccess] = React.useState(false);
  const [profilePic, setProfilePic] = React.useState<string>("");

  const [googleLoginSuccess, setGoogleLoginSuccess] = React.useState<iGoogleInfo | null>(null);

  // @ts-ignore
  const googleLogin = useGoogleLogin({
    redirect_uri: "http://localhost:3001/login",
    ux_mode: "redirect",
    onSuccess: credentialResponse => setGoogleLoginSuccess(credentialResponse),
    onError: () => {
      console.error("error");
    }
  });

  React.useEffect(() => {
    setPageActive(true);
  }, []);

  googleLoginSuccess ? handleGoogleLogin(googleLoginSuccess) : null;

  // const hasAccess = googleLoginSuccess ? hasGrantedAnyScopeGoogle(googleLoginSuccess, "https://www.googleapis.com/auth/userinfo.profile", "https://www.googleapis.com/auth/userinfo.email") : null;

  // Slowly decrease the progress bar from 100 to 0 in 3 seconds
  React.useEffect(() => {
    if (loginSuccess) {
      const interval = setInterval(() => {
        setLoginSuccessProgress((prevProgress) =>
          prevProgress <= 0 ? 0 : prevProgress - 1
        );
      }, 30);
      return () => {
        clearInterval(interval);
      };
    }
  }, [loginSuccess]);

  // Set loginSuccess to false when progress bar reaches 0
  React.useEffect(() => {
    if (loginSuccessProgress == 0) {
      setLoginSuccess(false);
    }
  }, [loginSuccessProgress]);

  const containerStyle: React.CSSProperties = {
    position: "relative",
    width: "80px",
    height: "80px",
  };

  const imgStyle: React.CSSProperties = {
    width: "100%",
    borderRadius: "50%",
    position: "absolute",
    transition: "opacity 0.3s, transform 0.3s",
    opacity: profilePic ? 1 : 0,
    transform: profilePic ? "scale(1)" : "scale(0.8)",
  };

  const iconStyle: React.CSSProperties = {
    position: "absolute",
    fontSize: "80px",
    transition: "opacity 0.3s, transform 0.3s",
    opacity: profilePic ? 0 : 1,
    transform: profilePic ? "scale(0.8)" : "scale(1)",
  };

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
      className={`page ${pageActive && !pageUnload ? "active" : ""} ${
        pageUnload ? "unload" : ""
      }`}
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
          <div>
            <div style={containerStyle}>
              {profilePic ? (
                <img style={imgStyle} src={TestPic1} alt="Profile" />
              ) : (
                <></>
              )}
              <AccountCircle
                style={iconStyle}
                color={loginSuccess && !profilePic ? "success" : undefined}
              />
            </div>
          </div>
          <Typography component="h1" variant="h5">
            {profilePic ? "Welcome back, TestUser" : "Sign in"}
          </Typography>
          {loginSuccess ? (
            <LinearProgress
              color="info"
              sx={{ height: 10, width: "80%" }}
              variant="determinate"
              value={loginSuccessProgress}
            />
          ) : null}
          <Box
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              console.log("submit");

              setLoginSuccess(true);
              setProfilePic(TestPic1);
              setTimeout(() => {
                setPageUnload(true);
                setTimeout(() => (window.location.href = "/about"), 1000);
              }, 4000);
            }}
            sx={{ mt: 1, textAlign: "center" }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              type="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {}}
            >
              Anmelden
            </Button>
          </Box>
          <BottomComponent googleLogin={googleLogin} microsoftLogin={() => {}} telegramLogin={() => {}}  />
        </Box>
      </Container>
    </Box>
  );
}

function SocialMediaIconGrid({children, title, ariaLabel, onClick} : {children: React.ReactNode, title: string, ariaLabel: string, onClick?: () => void})
{
  return(
    <Grid
    item
    xs={12}
    md={4}
    sx={{
      justifyContent: "center",
      display: "flex",
    }}>
      <IconButton
      color="primary"
      onClick={onClick}
      title={title}
      aria-label={ariaLabel}
      component="a"
      size="large"
      sx={{ bgcolor: "primary.main", color: "primary.contrastText" }}
      >
        {children}
      </IconButton>
    </Grid>
  )
}

async function handleGoogleLogin(account: iGoogleInfo | null)
{
  if(!account) return null;
  const googleAccount = await getGoogleAccount(account);
  if(!googleAccount) throw new Error("Error getting google account");

  // if(!checkIfRegistered(googleAccount)) throw new Error("User not registered");
  sessionStorage.setItem("token", "none");
  const res = await api.post("/api/user/login/google", {
    token: account.access_token,
    email: googleAccount.email,
  });
  if(res.status !== 200) throw new Error("Error logging in");

  const tokenValid = (await api.get<string>("/api/validateJWT")).data;

  if(!tokenValid) throw new Error("JWT signature invalid. Possible attack!");
  sessionStorage.setItem("token", res.data.value);

}



async function getGoogleAccount(googleAccount: iGoogleInfo | null)
{
  if(!googleAccount) return null;
  setGoogleToken(googleAccount.access_token);
  const res = await googleapi.get<iGoogleInfoResponse>("/oauth2/v1/userinfo");
  if(res.status !== 200) return null;
  return res.data;
}


async function checkIfRegistered(googleAccount: iGoogleInfoResponse)
{
  return (await api.get<{value: boolean}>("/api/user/exists?email=" + googleAccount.email)).data.value;
}

interface iGoogleInfoResponse {
  id: string;
  email: string;
  verified_email: boolean;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  locale: string;
}

function BottomComponent({googleLogin, microsoftLogin, telegramLogin} : {googleLogin: () => void, microsoftLogin: () => void, telegramLogin: () => void})
{
  return <>
  <Typography component="h2" variant="h6" sx={{ mt: 4 }}>
            Oder anmelden mit
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2, justifyContent: "center" }}>
              <SocialMediaIconGrid title="Mit Google-Account anmelden" ariaLabel="Sign up with Google" onClick={() => googleLogin()}>
                <Google />
              </SocialMediaIconGrid>
              <SocialMediaIconGrid title="Mit Microsoft-Account anmelden" ariaLabel="Sign up with Microsoft" onClick={() => microsoftLogin()}>
                <MicrosoftIcon />
              </SocialMediaIconGrid>
            <SocialMediaIconGrid title="Mit Telegram-Account anmelden" ariaLabel="Sign up with Telegram" onClick={() => telegramLogin()}>
                <Telegram />
            </SocialMediaIconGrid>
          </Grid>
          <RegisterLink />
  </>
}

function MicrosoftIcon()
{
  return(<svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 23 23"
  >
    <path fill="transparent" d="M0 0h23v23H0z" />
    <path
      fill="#fff"
      className="ms-icon-fill"
      d="M1 1h10v10H1z"
    />
    <path
      fill="#fff"
      className="ms-icon-fill"
      d="M12 1h10v10H12z"
    />
    <path
      fill="#fff"
      className="ms-icon-fill"
      d="M1 12h10v10H1z"
    />
    <path
      fill="#fff"
      className="ms-icon-fill"
      d="M12 12h10v10H12z"
    />
  </svg>)
}

function RegisterLink()
{
  return <Typography component="h2" variant="h6" sx={{ mt: 2 }}>
            Neu hier?{" "}
            <Button
              onClick={() => {
                window.location.href = "/register";
              }}
              color="primary"
              component="a"
              href="#"
              sx={{ fontWeight: "bold" }}
            >
              Registrieren
            </Button>
          </Typography>
}