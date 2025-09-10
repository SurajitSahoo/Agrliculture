import React from "react";
import { Link } from "react-router-dom";
import './Nav.css'
import { ListGroup } from "reactstrap";
import weather from "./weather";
const Nav=()=>
{
    return(
        <header className="header">
            <ListGroup>
            <Link  className="Logo">Agricrops</Link>
            <nav className="navbar">
                <Link to = "/home" action>Home</Link>
                <Link to = "/Crops" action>Crops</Link>
                <Link to = "/weather">Weather</Link>
                <Link to = "/about">About</Link>
            </nav>
            </ListGroup>
        </header>

    )
}
export default Nav;