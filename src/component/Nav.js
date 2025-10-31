import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap"; 
import weather from "./weather";
const Nav=()=>
{
    return(
        <header className="bg-blue-600  relative mb-3">
            <ListGroup className="">
            <Link  className="flex ml-2 mt-1 text-3xl font-bold text-white no-underline ">Agricrops</Link>
            <nav className="flex text-right font-bold items-center justify-center px-6 h-10">
                <Link className=" text-white mr-4 no-underline items-center " to = "/home" action>Home</Link>
                <Link className=" text-white mr-4 no-underline items-center active:scale-105 transition duration-300" to = "/Crops" action>Crops</Link>
                <Link className=" text-white mr-4 no-underline items-center" to = "/weather">Weather</Link>
                <Link className=" text-white mr-4 no-underline items-center" to = "/about">About</Link>
            </nav>
            </ListGroup>
        </header>

    )
}
export default Nav;