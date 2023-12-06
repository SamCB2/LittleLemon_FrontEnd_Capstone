import React, { useState } from "react";
import "../Styles/Nav.css";
import { NavLink, Link } from 'react-router-dom';
import logo from '../Images/Logo.svg'

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () =>{
        setMenuOpen(!menuOpen);
    }
    return(
        <nav className={`navbar ${menuOpen ? "open": ""}`}>
            <Link to="/" className="logo-link"><img src={logo} alt="logo" className="logo"/></Link>
            <>
            <img src="../Images/🦆 icon _hamburger menu_.svg" className="menu-icon" onClick={toggleMenu}/>
            </>
            <div className="nav-links">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/About">About</NavLink></li>
                    <li><NavLink to="/Menu">Menu</NavLink></li>
                    <li><NavLink to="/Reservation" >Reservation</NavLink></li>
                    <li><NavLink to="/Order-online">Order Online</NavLink></li>
                    <li><NavLink to="/Login">Login</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;