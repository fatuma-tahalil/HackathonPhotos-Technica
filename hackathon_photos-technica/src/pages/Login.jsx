import '.UploadPost.css';

function LoginPage() {
    return(
        <>
        <div className="container">
            <img className="logo" src={technicaPhoto} alt="Technica Logo"></img> 
            <br></br>
            <br></br>
            <button className="SignInButton" id="LoginButton"> Log in</button>
            <br></br>
            <br></br>
            <button className="SignInButton" id="signUpButton"> Sign up</button>
        </div>
        </>
    );
}

export default LoginPage