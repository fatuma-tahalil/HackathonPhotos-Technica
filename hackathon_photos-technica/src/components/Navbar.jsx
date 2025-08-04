import { Link } from "react-router-dom"
import "../css/App.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/login"> Login </Link>
            <Link to="/profile"> Profile </Link>
            <Link to="/photogallery"> Gallery </Link>
            <Link to="/uploadpost"> Create Post </Link>
        </nav>
    )
}

export default Navbar;

