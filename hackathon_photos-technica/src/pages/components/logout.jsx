import {GoogleLogout } from 'react-google-login';

const clientId = 481280737880-rei7cg71h4bpor4st11s0o5996fmkn4r.apps.googleusercontent.com;

function Logout() {

    const onSuccess = () => {
        console.log("Log out successful!");
    }

return (
    <div id="signOutButton">
        <GoogleLogout
        clientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
        />
    </div>
)
}

export default Logout;