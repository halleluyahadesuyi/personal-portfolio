import Nav from "./Components/Nav"
import Profile from "./Components/Profile"
import AboutMe from "./Components/AboutMe"
import Certifications from "./Components/Certifications"
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

      <MyWork 
        src={imageGallery}
        alt="Responsive Image Gallery App"
        name="Responsive Image Gallery App"
        tech1="React" tech2="Unsplash API" tech3="JavaScript"
        tech4="CSS" tech5="HTML"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        liveDemo="https://responsive-image-gallery-using-unsplash-api.netlify.app/"
        github="https://github.com/halleluyahadesuyi/responsive-image-gallery-using-unsplash-api"
      />
      <MyWork 
        src={chromeExtension}
        alt="Chrome Extension"
        name="Chrome Extension"
        tech1="JavaScript" tech2="GeoLocation Web API" tech3="OpenWeatherMap API"
        tech4="CSS" tech5="HTML"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        liveDemo=""
        github=""
      />
      <MyWork 
        src=""
        alt=""
        name=""
        tech1="React" tech2="Unsplash API" tech3="JavaScript"
        tech4="HTML" tech5="CSS"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        liveDemo=""
        github=""
      />
      <MyWork 
        src=""
        alt=""
        name=""
        tech1="React" tech2="Unsplash API" tech3="JavaScript"
        tech4="HTML" tech5="CSS"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        liveDemo=""
        github=""
      />
      <MyWork 
        src=""
        alt=""
        name=""
        tech1="React" tech2="Unsplash API" tech3="JavaScript"
        tech4="HTML" tech5="CSS"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        liveDemo=""
        github=""
      />
    </div>
  );
}

export default App;
