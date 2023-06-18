import { GoogleLogin, useGoogleOneTapLogin } from '@react-oauth/google';

const OwnGoogleLogin = () => <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
  useOneTap
/>;

export const useCustomGoogleOneTapLogin = () => {
    useGoogleOneTapLogin({
      onSuccess: (credentialResponse) => {
        console.log(credentialResponse);
      },
      onError: () => {
        console.log('Login Failed');
      },
    });
  };

export default OwnGoogleLogin;