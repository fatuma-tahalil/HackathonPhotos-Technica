import { GoogleLogin } from 'react-google-login';

const clientId = 481280737880-rei7cg71h4bpor4st11s0o5996fmkn4r.apps.googleusercontent.com;

function Login() {

    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
    }

    const onFailure = (res) => {
        console.log("LOGIN FAILED! res: ", res);
    }



    return(
        <div id="signInButton">
            <GoogleLogin
            clientid={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure = {onFailure}
            cookiePolicy = {'single_host_origin'}
            isSignedIn={true}
            />
        </div>
    )
}

export default Login