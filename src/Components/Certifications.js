import React from "react"
import scrimbaLogo from "../img/scrimba.jpg" 
import udacityLogo from "../img/udacity.png"
import courseraLogo from "../img/coursera" 

export default function Certifications() {
  return (
    <section className="certifications">
        <h3>Certifications</h3>
        
        <div className="cert-grid">
            <div className="cert-item">
                <img src={reactLogo} alt="React" className="cert-img" />
                <h4>React</h4>
            </div>

            <div className="cert-item">
                <img src={nextjsLogo} alt="Next.js" className="cert-img" />
                <h4>Next.js</h4>
            </div>

            <div className="cert-item">
                <img src={javascriptLogo} alt="JavaScript" className="cert-img" />
                <h4>JavaScript</h4>
            </div>

            <div className="cert-item">
                <img src={htmlLogo} alt="HTML" className="cert-img" />
                <h4>HTML</h4>
            </div>

            <div className="cert-item">
                <img src={cssLogo} alt="CSS" className="cert-img" />
                <h4>CSS</h4>
            </div>

            <div className="cert-item">
                <img src={figmaLogo} alt="Figma" className="cert-img" />
                <h4>Figma</h4>
            </div>

            <div className="cert-item">
                <img src={gitLogo} alt="Git" className="cert-img" />
                <h4>Git</h4>
            </div>

            <div className="cert-item">
                <img src={githubLogo} alt="Github" className="cert-img" />
                <h4>Github</h4>
            </div>

            <div className="cert-item">
                <img src={api} alt="REST APIs" className="cert-img" />
                <h4>REST APIs</h4>
            </div>
        </div>
    </section>
  )
}
