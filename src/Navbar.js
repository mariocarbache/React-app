import React from "react";
import { Link } from "react-router-dom";
import './style.css';
import WeatherLA from "./London";


function Navbar() {
    return (
        <nav className="nav-bar">
            <Link className="link" to={"/"}>Home </Link>
            <Link className="link" to={"/NYC"}>New York </Link>
            <Link className="link" to={"/London"}>London </Link>
            <Link className="link" to={"/Tokyo"}>Tokyo </Link>
            <Link className="link" to={"/Search"}>Search</Link>
        </nav>
    )
}

export default Navbar;