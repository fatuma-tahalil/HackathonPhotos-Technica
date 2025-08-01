import './UploadPost.css';
import LoginButton from "./components/login.jsx";
import LogoutButton from "./components/logout.jsx"
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const clientId = 481280737880-rei7cg71h4bpor4st11s0o5996fmkn4r.apps.googleusercontent.com;

function LoginPage() {

    useEffect(()=> {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope:""
            })
        };

        gapi.load('client:auth2', start);
    })
    return(
        <>
        <div className="container">
            <img className="logo" src={technicaPhoto} alt="Technica Logo"></img> 
            <br></br>
            <br></br>
            <LoginButton/>
            <LogoutButton/>
            <br></br>
            <br></br>
            <button className="SignInButton" id="signUpButton"> Sign up</button>
        </div>
        </>
    );
}

export default LoginPage