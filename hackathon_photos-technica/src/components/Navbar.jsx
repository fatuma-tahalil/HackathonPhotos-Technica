import { Link } from "react-router-dom"
import "../css/App.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-group">
                <Link to="/profile"> Profile </Link>
                <Link to="/photogallery"> Gallery </Link>
                <Link to="/uploadpost"> Create Post </Link>
            </div>
            <Link id="logout" to="/login"> Logout </Link>
        </nav>
    )
}

export default Navbar;

