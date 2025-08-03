import "../css/App.css"
import '../css/Login.css'
import technicaPhoto from '../assets/technica2.png'

const Login = () => {
  return (
        <div class="login-page">
            <div className="container">
                <img className="logo" src={technicaPhoto} alt="Technica Logo"></img>
                <br></br>
                <br></br>
                <button className="SignInButton" id="LoginButton"> Log in</button>
                <br></br>
                <br></br>
                <button className="SignInButton" id="signUpButton"> Sign up</button>
            </div>
        </div>
    )
}
export default Login