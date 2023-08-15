import React from "react";
import { Link } from "react-router-dom";
import './style.css';


function Navbar() {
    return (
        <nav className="nav-bar">
            <Link className="link" to={"/"}>Home </Link>
            <Link className="link" to={"/"}>New York </Link>
            <Link className="link" to={"/"}>Los Angeles </Link>
            <Link className="link" to={"/"}>Chicago </Link>
        </nav>
    )
}

export default Navbar;