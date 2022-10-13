import React from "react"
import githubLogo from "../img/github-myWork.png"

export default function MyWork(props) {
  return (
    <section className="each-project">
        <a href={props.projectLink} target="_blank">
          <img src={props.src} alt={props.alt} className="project-img" />
        </a>
        <h4 className="project-name">{props.name}<span className="soonest">{props.soonest}</span></h4>

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
            <p className="live-demo">
              <a href={props.liveDemo} target="_blank">Live Demo</a>
            </p>

            <section>
                <p className="github-group">
                  <a href={props.github} target="_blank" className="github-flex">
                    <span>Github</span>
                    <img src={githubLogo} alt="Github Logo" className="github-logo" />   
                  </a>
                </p>
            </section>
        </section>
    </section>
  )
}
