import React from "react"
import scrimbaLogo from "../img/scrimba.jpg" 
import udacityLogo from "../img/udacity.png"
import courseraLogo from "../img/coursera.png"
import ibmLogo from "../img/ibm.png" 

export default function Certifications() {
  return (
    <section className="certifications">
        <h2>Certifications</h2>
        
        <div className="cert-grid">
            <div className="cert-item">
                <img src={scrimbaLogo} alt="Scrimba Logo" className="cert-img" />
                <div>
                    <h4><a href="https://scrimba.com/learn/frontend">Frontend Developer Career Path</a></h4>
                    <p>Scrimba</p>
                </div>
            </div>

            <div className="cert-item">
                <img src={udacityLogo} alt="Udacity Logo" className="cert-img" />
                <div>
                    <h4><a href="https://confirm.udacity.com/SP4CWSWA">Nanodegree, Intro to Programming</a></h4>
                    <p>Udacity</p>
                </div>
            </div>

            <div className="cert-item">
                <img src={courseraLogo} alt="Coursera Logo" className="cert-img" />
                <div>
                    <h4><a href="https://www.coursera.org/account/accomplishments/certificate/8SPFY8R4EGWD">Crash Course on Python</a></h4>
                    <p>Coursera</p>
                </div>
            </div>

            <div className="cert-item">
                <img src={ibmLogo} alt="IBM Logo" className="cert-img" />
                <div>
                    <h4><a href="https://www.credly.com/badges/6948d528-484e-4852-aac4-06dd0d83ac1a?source=linked_in_profile">Python for Data Science</a></h4>
                    <p>IBM</p>
                </div>
            </div>

            <div className="cert-item">
                <img src={ibmLogo} alt="IBM Logo" className="cert-img" />
                <div>
                    <h4><a href="https://www.credly.com/badges/8d1754ea-c6b1-4a59-a09f-467b61222145?source=linked_in_profile">Data Science Foundations - Level 1</a></h4>
                    <p>IBM</p>
                </div>
            </div>

            <div className="cert-item">
                <img src={ibmLogo} alt="IBM Logo" className="cert-img" />
                <div>
                    <h4><a href="https://www.credly.com/badges/ea4d698b-f1ad-4893-9962-a7930932eef3?source=linked_in_profile">Data Science Foundations - Level 2</a></h4>
                    <p>IBM</p>
                </div>
            </div>

            <div className="cert-item">
                <img src={ibmLogo} alt="IBM Logo" className="cert-img" />
                <div>
                    <h4><a href="https://www.credly.com/badges/71edcf2f-679d-486b-a5b0-fe6bf4a3d399?source=linked_in_profile">Data Science Methodologies</a></h4>
                    <p>IBM</p>
                </div>
            </div>
        </div>
    </section>
  )
}
