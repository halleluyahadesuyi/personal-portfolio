import React, {useRef} from "react"

import Nav from "./Components/Nav"
import Profile from "./Components/Profile"
import AboutMe from "./Components/AboutMe"
import Certifications from "./Components/Certifications"
import MyWork from "./Components/MyWork"
import Footer from "./Components/Footer"
import ProgressiveImage from "./Components/ProgressiveImageLoading/ProgressiveImage"

import decorativeUnderline from "./img/line-star-line.png"
import imageGallery from "./img/image-gallery.png"
import chromeExtension from "./img/chrome-extension.PNG"
import personalPortfolio from "./img/personal-portfolio.PNG"
import businessPage from "./img/business-page.PNG"
import survivorGame from "./img/survivor-game.PNG"
import comingSoonest from "./img/coming-soonest.png"

import "./App.css"

function App() {
  return (
    <div className="App">
      <Nav />

      <Profile />

      <AboutMe />

      <Certifications />

      <section className="my-work" id="portfolio">
        <h2>MY WORK</h2>
        <span className="italicize">...some of my projects</span>
        <ProgressiveImage
          src={decorativeUnderline}
          placeholderSrc={decorativeUnderline}
          alt="Decorative Underline"
          className="underline"
        />

        <div className="projects">
          <MyWork
            src={imageGallery}
            alt="responsive image gallery app"
            projectLink="https://responsive-image-gallery-using-unsplash-api.netlify.app/"
            name="Responsive Image Gallery App"
            tech1="React" tech2="Unsplash API" tech3="JavaScript"
            tech4="CSS" tech5="HTML"
            description="My goal for this project was to create a platform which would be
                          a mini-clone of the popular Unsplash App. I implemented my visual
                          designs with CSS, and added some cool features like a colour-changing background
                          and a customized modal interface. I used React Hooks such as UseState 
                          and UseEffect to control data flow within the app, and also Unsplash API 
                          to retrieve images from user's unique search results."
            liveDemo="https://responsive-image-gallery-using-unsplash-api.netlify.app/"
            github="https://github.com/halleluyahadesuyi/responsive-image-gallery-using-unsplash-api"
          />

          <MyWork
            src={chromeExtension}
            alt="chrome extension"
            projectLink="https://chrome-dashboard-extension-using-coingecko-api.netlify.app/"
            name="Chrome Extension"
            tech1="JavaScript" tech2="CoinGecko API" tech3="GeoLocation Web API" tech4="OpenWeatherMap API" tech5="CSS" tech6="HTML"
            description="This provides a solution to the challenge of seeing a
                          blank page every time a new tab or window is launched on Chrome browser.
                          Instead, the user sees random background pictures, CoinGecko API retrieves dogecoin market values. I also used Geolocation Web API and OpenWeatherMap API which returns user's current location and weather conditions respectively."
            liveDemo="https://chrome-dashboard-extension-using-coingecko-api.netlify.app/"
            github="https://github.com/halleluyahadesuyi/chrome-dashboard-extension-using-coingecko-api"
          />

          <MyWork
            src={personalPortfolio}
            alt="personal portfolio"
            projectLink="https://personal-portfolio-halleluyah-adesuyi.netlify.app/"
            name="Personal Portfolio"
            tech1="React" tech2="JavaScript" tech3="CSS" tech4="HTML" tech5="react-scroll-to-top"
            description="You are here! 😃🎉. I built this centralized website for you to know me more and to also display some of my personal projects. Creating several React Components to accomplish this, I also made use of the react-scroll-to-top library for easier scrolling, and to further improve user's experience within this website."
            liveDemo="https://personal-portfolio-halleluyah-adesuyi.netlify.app/"
            github="https://github.com/halleluyahadesuyi/personal-portfolio"
          />

          <MyWork
            src={businessPage}
            alt="business landing page"
            projectLink="https://business-landing-page-plus-subscription.netlify.app/"
            name="A Business Landing Page"
            tech1="HTML" tech2="CSS"
            description="As part of the requirements of a software development program I underwent in year 2020,
                          I built a prototype business landing page app where I also made provision
                          for users to make a pseudo-subscription to a newsletter via the HTML form input field."
            liveDemo="https://business-landing-page-plus-subscription.netlify.app/"
            github="https://github.com/halleluyahadesuyi/business-landing-page"
          />

          <MyWork
            src={survivorGame}
            alt="survivor game"
            projectLink="https://thrilling-survivor-game-wizard-and-monsters.netlify.app/"
            name="A Thrilling Survivor Game"
            tech1="JavaScript" tech2="HTML" tech3="CSS"
            description="This game was implemented using exported and imported JavaScript files to separate
                          the game's parts into manageable code sections. Using locally stored data as reference, 3 monsters switch places as a wizard’s health bar decreases, of which the game ends when either the wizard or monsters health bar indicator reduces to 0. The survivor is then declared the winner. I also utilized Google Fonts for easier cross-browser font accessibility."
            liveDemo="https://thrilling-survivor-game-wizard-and-monsters.netlify.app/"
            github="https://github.com/halleluyahadesuyi/thrilling-survivor-game-wizard-and-monsters"
          />

          <MyWork
            src={comingSoonest}
            alt="ongoing project"
            name="React E-Commerce Website ---"
            soonest=" coming soon"
            tech1="React" tech2="GraphQL" tech3="JavaScript"
            tech4="HTML" tech5="CSS"
            description="This project uses GraphQL, a data query language which is a more effective 
                          alternative to REST APIs, due to its lesser network traffic consumption. This website uses a Shopping Cart interface and some advanced React features like React Routers for optimized page-to-page navigation when users are making their online goods purchase. The focus of this app is to further implement using the available technologies of UseState, UseEffect and some custom React Hooks."
            liveDemo="#"
            github="#"
          />
        </div>
      </section>

      <Footer id="contact" />
    </div>
  );
}

export default App;
