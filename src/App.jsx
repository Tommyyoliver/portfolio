import "./assets/css/output.css";
import { Sidebar } from "./components/Sidebar";
import { InitialSeciton } from './components/InitialSection';
import { AboutMe } from "./components/AboutMe";
import { Proyects } from "./components/Proyects";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <InitialSeciton />
      <AboutMe />
      <Proyects />
    </div>
  )
}

export default App
