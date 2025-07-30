import { Link } from "react-router-dom"
import "../App.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/photogallery"> Gallery </Link>
            <Link to="/profile"> Profile </Link>
            <Link to="/uploadpost"> Create Post </Link>
        </nav>
    )
}