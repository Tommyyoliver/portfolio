import "./assets/css/output.css";
import { Sidebar } from "./components/Sidebar";
import { InitialSeciton } from './components/InitialSection';
import { AboutMe } from "./components/AboutMe";
import { Proyects } from "./components/Proyects";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <InitialSeciton />
      <AboutMe />
      <Proyects />
      <Footer />
    </div>
  )
}

export default App
