import React from "react"
import ScrollToTop from "react-scroll-to-top"

import logo from "../img/logo.png"
import emailIcon from "../img/email-icon.png"

export default function Nav() {
    function hamburgerToggle() {
        const navbarLinks = document.getElementsByClassName("navbar-links")[0]
        navbarLinks.classList.toggle("navbar-links-active")
    }

    const scrollToBottom = (scrollHeight) => {
        window.scrollTo({
          top: scrollHeight,
          behavior: 'smooth',
        })
      }

    return (
        <nav className="navbar">
            <ScrollToTop />
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
                    <li className="link">
                        <a onClick={(e) => {
                            e.preventDefault()
                            scrollToBottom(660)}} href="about">ABOUT
                        </a>
                    </li>
                    <li className="link">
                        <a onClick={(e) => {
                            e.preventDefault()
                            scrollToBottom(1660)}} href="portfolio">PORTFOLIO
                        </a>
                    </li>
                    <li className="link">
                        <a onClick={(e) => {
                            e.preventDefault()
                            scrollToBottom(5303)}} href="contact">CONTACT</a>
                    </li>
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