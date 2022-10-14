import React from "react"
import { Link } from "react-router-dom"
import logo from "../img/logo.png"
import emailIcon from "../img/email-icon.png"

export default function Nav() {
    function hamburgerToggle() {
        const navbarLinks = document.getElementsByClassName("navbar-links")[0]
        navbarLinks.classList.toggle("navbar-links-active")
    }

    return (
        <nav className="navbar">
            <img
                src={logo}
                alt="brand logo"
                className="logo"
            />

            <a href="mailto:adesuyihalleluyah@gmail.com" target="_blank" className="get-in-touch-navbar">
                <h5>GET IN TOUCH!</h5>
                <img
                    src={emailIcon}
                    alt="Email Icon"
                    className="email-icon"
                />
            </a>

            <div className="navbar-links">
                <ul>
                    <li><Link to="/">-</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><a href="#">PORTFOLIO</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </div>

            <div className="hamburger-toggle" onClick={hamburgerToggle}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    )
}
