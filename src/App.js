import Nav from "./Components/Nav"
import Profile from "./Components/Profile"
import AboutMe from "./Components/AboutMe"
import Certifications from "./Components/Certifications"
import MyWork from "./Components/MyWork"
import imageGallery from "./img/image-gallery.png"

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
        // utilized={}
      />
    </div>
  );
}

export default App;
