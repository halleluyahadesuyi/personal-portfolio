import React from "react"
import githubLogo from "../img/github-myWork.png"

export default function MyWork(props) {
  return (
    <section className="each-project">
        <img src={props.src} alt={props.alt} className="project-img" />
        <h4 className="project-name">{props.name}</h4>

        <section className="tech-used">
            <span className="tech">{props.tech1}</span>
            <span className="tech">{props.tech2}</span>
            <span className="tech">{props.tech3}</span>
            <span className="tech">{props.tech4}</span>
            <span className="tech">{props.tech5}</span>
            <span className="tech">{props.tech6}</span>
        </section>
        
        <p className="description">{props.description}</p>

        <section className="liveDemo-and-github">
            <p className="live-demo"><a href={props.liveDemo} target="_blank">Live Demo</a></p>
            <div className="github-flex">
                <p><a href={props.github} target="_blank">Github</a></p>
                <img src={githubLogo} alt="Github Logo" className="github-logo" />
            </div>
        </section>
    </section>
  )
}
