import { GoogleLogin } from "react-google-login";

const clientId = "write you client id after getting from google console";
export default function Login() {
  const onSuccess = (res: any) => {
    console.log("Login Success! current user is: ", res.profileObj);
  };
  const onFailure = (res: any) => {
    console.log("Login Failed res ", res);
  };
  return (
    <>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </>
  );
}
