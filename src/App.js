import Nav from "./Components/Nav"
import Profile from "./Components/Profile"
import AboutMe from "./Components/AboutMe"
import Certifications from "./Components/Certifications"
import Footer from "./Components/Footer"
import decorativeUnderline from "./img/line-star-line.png"
import MyWork from "./Components/MyWork"
import imageGallery from "./img/image-gallery.png"
import chromeExtension from "./img/chrome-extension.PNG"
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

      <section className="my-work">
        <h2>MY WORK</h2>
        <span className="italicize">..some of my projects</span>
        <img
          src={decorativeUnderline}
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
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            liveDemo="https://responsive-image-gallery-using-unsplash-api.netlify.app/"
            github="https://github.com/halleluyahadesuyi/responsive-image-gallery-using-unsplash-api"
          />
          <MyWork
            src={chromeExtension}
            alt="chrome extension"
            projectLink="https://chrome-dashboard-extension-using-coingecko-api.netlify.app/"
            name="Chrome Extension"
            tech1="JavaScript" tech2="GeoLocation Web API" tech3="CoinGecko API" tech4="OpenWeatherMap API" tech5="CSS" tech6="HTML"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            liveDemo="https://chrome-dashboard-extension-using-coingecko-api.netlify.app/"
            github="https://github.com/halleluyahadesuyi/chrome-dashboard-extension-using-coingecko-api"
          />
          <MyWork
            src={businessPage}
            alt="business landing page"
            projectLink="https://business-landing-page-plus-subscription.netlify.app/"
            name="A Business Landing Page"
            tech1="React" tech2="Unsplash API" tech3="JavaScript"
            tech4="HTML" tech5="CSS"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            liveDemo="https://business-landing-page-plus-subscription.netlify.app/"
            github="https://github.com/halleluyahadesuyi/business-landing-page"
          />
          <MyWork
            src={survivorGame}
            alt="survivor game"
            projectLink="https://thrilling-survivor-game-wizard-and-monsters.netlify.app/"
            name="A Thrilling Survivor Game"
            tech1="React" tech2="Unsplash API" tech3="JavaScript"
            tech4="HTML" tech5="CSS"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            liveDemo="#"
            github="#"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
