import technicaPhoto from '../assets/technica2.png';
import '../css/App.css';
import '../css/Login.css';
import { signInWithGoogle } from '../firebase/auth.ts';

const Login = () => {
    const handleGoogleSignIn = async () => {
        try {
            console.log("About call sign in with google");
            await signInWithGoogle();
            console.log("Login successfull");
        } catch (error) {
            console.error("Login failed");
            console.error(error);
        }
    }

  return (
        <div className="login-page">
            <div className="container">
                <img className="logo" src={technicaPhoto} alt="Technica Logo"></img>
                <div className="padding-medium"></div>
                <button onClick={handleGoogleSignIn} className="SignInButton" id="LoginButton"> Log in</button>
                <div className="padding-medium"></div>
                <button onClick={handleGoogleSignIn} className="SignInButton" id="signUpButton"> Sign up</button>
            </div>
        </div>
    )
}
export default Login