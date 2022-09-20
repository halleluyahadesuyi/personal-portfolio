import Nav from "./Components/Nav"
import Profile from "./Components/Profile"
import Intro from "./Components/Intro"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Nav />

      <Profile />

      <Intro />

      <header className="App-header">
        <h1>yello!</h1>
      </header>
    </div>
  );
}

export default App;
