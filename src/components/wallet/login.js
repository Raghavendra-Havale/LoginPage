import React from "react";
import { GoogleLogin } from "react-google-login";

const clientId =
  "168809135511-dnsstsk3152mde5qrdnvbn8c8ds2863p.apps.googleusercontent.com";
function Login() {
  const onSuccess = (res) => {
    console.log("[Login Success] currentUser:", res.profileobj);
  };
  const onFailure = (res) => {
    console.log("[Login failed] res:", res);
  };
  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        styles={{ marginTop: "100px" }}
        isSignedIn={true}
      />
    </div>
  );
}
export default Login;
