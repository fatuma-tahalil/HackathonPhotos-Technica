import { Link } from 'react-router-dom';
import { signOutWithGoogle } from '../firebase/auth.ts';
import logoutIcon from '../assets/logoutIcon.svg';
import "../css/App.css";

const Navbar = () => {
    const handleGoogleSignOut = async () => {
    try {
        await signOutWithGoogle();
    } catch (error) {
        console.error("Logout failed");
        console.error(error);
    }
}
    return (
        <nav className="navbar">
            <div className="navbar-group">
                <Link to="/profile"> Profile </Link>
                <Link to="/photogallery"> Gallery </Link>
                <Link to="/uploadpost"> Create Post </Link>
            </div>
            <Link onClick={handleGoogleSignOut} className="logout" to="/login"> 
                Logout
                <img className="logout-icon" src={logoutIcon} alt="logout icon"/>
            </Link>
        </nav>
    )
}

export default Navbar;

