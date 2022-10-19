import React, {useRef} from "react"
import ScrollToTop from "react-scroll-to-top"

import logo from "../img/logo.png"
import emailIcon from "../img/email-icon.png"

export default function Nav() {
    function hamburgerToggle() {
        const navbarLinks = document.getElementsByClassName("navbar-links")[0]
        navbarLinks.classList.toggle("navbar-links-active")
    }

    // const about = useRef(null)
    const portfolio = useRef(null)
    // const contact = useRef(null)

    const scrollToBottom = (elementRef) => {
        window.scrollTo({
          top: elementRef.current.offsetTop,
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
                        <a href="#about">ABOUT
                        </a>
                    </li>
                    <li className="link">
                        <a onClick={(e) => {
                            e.preventDefault()
                            scrollToBottom(portfolio)}} href="portfolio">PORTFOLIO
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