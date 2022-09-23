import React from "react"
import decorativeUnderline from "../img/line-star-line.png"
import githubLogo from "../img/github.png"

export default function MyWork(props) {
  return (
    <section className="my-work">
        <h3>MY WORK</h3>
        <span>...some of my projects</span>
        <img 
            src={decorativeUnderline}
            alt="Decorative Underline"
            className="underline"
        />

        <div>
            <img src={props.src} alt={props.alt} className="project-img" />
            <h2>{props.name}</h2>

            
            <p className="tech-used">
                <span className="tech">{props.tech1}</span>
                <span className="tech">{props.tech2}</span>
                <span className="tech">{props.tech3}</span>
                <span className="tech">{props.tech4}</span>
                <span className="tech">{props.tech5}</span>
                <span className="tech">{props.tech6}</span>
            </p>
            
            <p>{props.description}</p>

            <div>
                <p><a href={props.liveDemo} target="_blank">Live Demo</a></p>
                <div>
                    <p><a href={props.github} target="_blank">Github</a></p>
                    <img src={githubLogo} alt="Github Logo" />
                </div>
            </div>
        </div>
    </section>
  )
}
