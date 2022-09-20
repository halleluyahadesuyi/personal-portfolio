import React from "react"
import decorativeUnderline from "../img/line-star-line.png"
import reactLogo from "../img/react.png"
import nextjsLogo from "../img/nextjs.png"
import javascriptLogo from "../img/javascript.png"
import htmlLogo from "../img/html.png"
import cssLogo from "../img/css.png"
import figmaLogo from "../img/figma.png"
import gitLogo from "../img/git.png"

export default function Intro() {
  return (
    <section class="about-me">
        <h3>WHO I AM</h3>
        <img 
            src={decorativeUnderline}
            alt="Decorative Underline"
            class="underline"
        />
        <p>I am a creative and design-oriented Frontend Developer
            who builds web applications using React. I love to bring life to abstract ideas, and
            solving real-life challenges in the process. I always want to know more and 
            therefore always inquisitive. I believe my inquisitiveness has helped me 
            so much in having more practical knowledge about the beautiful world of 
            software development; working with others and coding my way through each day.
        </p>
        
        <div class="skillset">
            <h4>Languages/Tools I utilize:</h4>
            
            <div class="skillset-flex">
                <div class="skill-item">
                    <img src={reactLogo} alt="React" class="skillset-img" />
                    <h5>React</h5>
                </div>

                <div class="skill-item">
                    <img src={nextjsLogo} alt="Next.js" class="skillset-img" />
                    <h5>Next.js</h5>
                </div>

                <div class="skill-item">
                    <img src={javascriptLogo} alt="JavaScript" class="skillset-img" />
                    <h5>JavaScript</h5>
                </div>

                <div class="skill-item">
                    <img src={htmlLogo} alt="HTML" class="skillset-img" />
                    <h5>HTML</h5>
                </div>

                <div class="skill-item">
                    <img src={cssLogo} alt="CSS" class="skillset-img" />
                    <h5>CSS</h5>
                </div>

                <div class="skill-item">
                    <img src={figmaLogo} alt="Figma" class="skillset-img" />
                    <h5>Figma</h5>
                </div>

                <div class="skill-item">
                    <img src={gitLogo} alt="Git" class="skillset-img" />
                    <h5>Git</h5>
                </div>
            </div>
        </div>
    </section>
  )
}
