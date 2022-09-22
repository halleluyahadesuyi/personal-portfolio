import Nav from "./Components/Nav"
import Profile from "./Components/Profile"
import Intro from "./Components/AboutMe"
import Certifications from "./Components/Certifications"
import "./App.css"
import AboutMe from "./Components/AboutMe"
import MyWork from "./Components/MyWork"

function App() {
  return (
    <div className="App">
      <Nav />

      <Profile />

      <AboutMe />

      <Certifications />

      <MyWork 
        src={""}
      />
    </div>
  );
}

export default App;
