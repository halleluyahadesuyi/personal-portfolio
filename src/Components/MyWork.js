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
            <img src={props.src} alt={props.alt} />
            <h2>{props.name}</h2>

            <div>
                <ul>
                    <li>{props.utilized}</li>
                </ul>
            </div>
            
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
