import React from "react"
import instagram from "../img/instagram.png"
import linkedin from "../img/linkedin.png"
import githubLogo from "../img/github-myWork.png"

export default function Footer() {
  return (
    <footer>
        <span>Copyright &copy; Halleluyah Adesuyi 2022</span>
        <section className="contact">
          <a href="https://www.instagram.com/ifeoluwa_hallel/" target="_blank">
            <img src={instagram} alt="Instagram Link" className="contact-instagram" />
          </a>

          <a href="https://www.linkedin.com/in/halleluyahadesuyi/" target="_blank">
            <img src={linkedin} alt="Linkedin Link" className="contact-linkedin" />
          </a>

          <a href="https://github.com/halleluyahadesuyi" target="_blank" alt="Github Link" className="contact-github">
            <img src={githubLogo} alt="Github Link" />
          </a>
        </section>
    </footer>
  )
}