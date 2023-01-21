import "./assets/css/output.css";
import { Sidebar } from "./components/Sidebar";
import { InitialSeciton } from './components/InitialSection';
import { AboutMe } from "./components/AboutMe";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <InitialSeciton />
      <AboutMe />
    </div>
  )
}

export default App
