import React from "react"
import logo from "../img/logo.png"
import emailIcon from "../img/email-icon.png"

export default function Nav() {
  return (
    <nav class="navbar">
        <img 
            src={logo}
            alt="brand logo"
            class="logo"
        />

        <a href="mailto:adesuyihalleluyah@gmail.com" class="get-in-touch">
            <h5>Get in touch!</h5>
            <img 
                src={emailIcon}
                alt="Email Icon"
                class="email-icon"
            />
        </a>

        <div class="navbar-links">
            <ul>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">PORTFOLIO</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
        </div>

        <a href="#" class="hamburger-toggle">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </a>
    </nav>
  )
}
