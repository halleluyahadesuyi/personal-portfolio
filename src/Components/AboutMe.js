import React from "react"

import decorativeUnderline from "../img/line-star-line.png"
import reactLogo from "../img/react.png"
import nextjsLogo from "../img/nextjs.png"
import javascriptLogo from "../img/javascript.png"
import htmlLogo from "../img/html.png"
import cssLogo from "../img/css.png"
import figmaLogo from "../img/figma.png"
import gitLogo from "../img/git.png"
import githubLogo from "../img/github.png"
import api from "../img/api.png"
import emailIcon from "../img/email-icon.png"

export default function AboutMe() {
    return (
        <section className="about-me" id="about">
            <h3>WHO I AM</h3>
            <img
                src={decorativeUnderline}
                alt="Decorative Underline"
                className="underline"
            />
            <p>I am a results-driven Frontend Developer, dedicated to crafting dynamic web applications with a focus on creativity and design. My expertise spans various software technologies, allowing me to transform abstract ideas into real-life solutions. Continuously fueled by curiosity, I actively acquire and apply practical skills in diverse languages and tools, resulting in the development of impactful, problem-solving products. When I am not immersed in code, I channel my passion into researching programming concepts, constantly deepening my understanding for continuous innovation and excellence.
            </p>

            <div className="skillset">
                <h4>Languages and Tools I utilize:</h4>

                <div className="skillset-grid">
                    <div className="skill-item">
                        <img src={reactLogo} alt="React" className="skillset-img" />
                        <h5>React</h5>
                    </div>

                    <div className="skill-item">
                        <img src={nextjsLogo} alt="Next.js" className="skillset-img" />
                        <h5>Next.js</h5>
                    </div>

                    <div className="skill-item">
                        <img src={javascriptLogo} alt="JavaScript" className="skillset-img" />
                        <h5>JavaScript</h5>
                    </div>

                    <div className="skill-item">
                        <img src={htmlLogo} alt="HTML" className="skillset-img" />
                        <h5>HTML</h5>
                    </div>

                    <div className="skill-item">
                        <img src={cssLogo} alt="CSS" className="skillset-img" />
                        <h5>CSS</h5>
                    </div>

                    <div className="skill-item">
                        <img src={figmaLogo} alt="Figma" className="skillset-img" />
                        <h5>Figma</h5>
                    </div>

                    <div className="skill-item">
                        <img src={gitLogo} alt="Git" className="skillset-img" />
                        <h5>Git</h5>
                    </div>

                    <div className="skill-item">
                        <img src={githubLogo} alt="Github" className="skillset-img" />
                        <h5>Github</h5>
                    </div>

                    <div className="skill-item">
                        <img src={api} alt="REST APIs" className="skillset-img" />
                        <h5>REST APIs</h5>
                    </div>
                </div>
            </div>

            <a href="mailto:adesuyihalleluyah@gmail.com" className="get-in-touch-intro">
                <h5>Get in touch!</h5>
                <img
                    src={emailIcon}
                    alt="Email Icon"
                    className="email-icon"
                />
            </a>
        </section>
    )
}
