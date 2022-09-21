import React, { useState}  from "react"
import logo from "../img/logo.png"
import emailIcon from "../img/email-icon.png"

export default function Nav() {
    // const hamburgerToggle = document.getElementsByClassName("hamburger-toggle")[0]
    // const navbarLinks = document.getElementsByClassName("navbar-links")[0]

    // hamburgerToggle.addEventListener("click", () => {
    //     navbarLinks.classList.toggle("active")
    // })

// {    const [hamburgerToggle, setHamburgerToggle] = React.useState(false)}

    function hamburgerToggle() {
        // console.log("yeeees!")
        // return hamburger-toggle.classList.toggle("active")
    }

  return (
    <nav className="navbar">
        <img 
            src={logo}
            alt="brand logo"
            className="logo"
        />

        <a href="mailto:adesuyihalleluyah@gmail.com" className="get-in-touch">
            <h5>Get in touch!</h5>
            <img 
                src={emailIcon}
                alt="Email Icon"
                className="email-icon"
            />
        </a>

        <div className="navbar-links">
            <ul>
                <li><a href="#">ABOUT</a></li>
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