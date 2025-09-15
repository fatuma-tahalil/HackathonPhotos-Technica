import '../css/App.css';
import '../css/Login.css';
import technicaLoginPhoto from '../assets/technicaLoginPhoto.png';
import { signInWithGoogle } from '../firebase/auth.ts';

const Login = () => {

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
        } catch (error) {
            console.error("Login failed");
            console.error(error);
        }
    }

  return (
        <div className="page">
            <div className="login-container">
                <div className="logo-square">
                    <img className="logo-img" src={technicaLoginPhoto} alt="Technica Logo"></img>
                </div>
                <div className="padding-medium"></div>
                <button onClick={handleGoogleSignIn} id="loginButton" className="button"> Log in</button>
            </div>
        </div>
    )
}
export default Login