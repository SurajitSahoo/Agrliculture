import React from "react";
import './Nav.css'
const Nav=()=>
{
    return(
        <header className="header">
            <a href="/" className="Logo">Agricrops</a>
            <nav className="navbar">
                <a href = "/">Home</a>
                <a href = "/">Crops</a>
                <a href = "/">Weather</a>
                <a href = "/">About</a>
            </nav>
        </header>

    )
}
export default Nav;