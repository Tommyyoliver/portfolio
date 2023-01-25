import "./assets/css/output.css";
import { Sidebar } from "./components/Sidebar";
import { InitialSeciton } from './components/InitialSection';
import { AboutMe } from "./components/AboutMe";
import { Proyects } from "./components/Proyects";
import { Footer } from "./components/Footer";
import { useState } from "react";

function App() {
  
  const [text, setText] = useState("BIENVENIDO");

  window.addEventListener("scroll", () => {
    const $aboutme = document.querySelector(".aboutme");
    const $proyects = document.querySelector(".proyects");
    let height = window.innerHeight / 2.6;
    let distanceAboutMe = $aboutme.getBoundingClientRect().top;
    let distanceProyects = $proyects.getBoundingClientRect().top;
    
    if(distanceProyects < height) {
      setText("PROJECTOS");
    } else if(distanceAboutMe < height) {
      setText("SOBRE MÍ");
    } else if(distanceAboutMe > height) {
      setText("BIENVENIDO");
    }
  })
  
  return (
    <div className="container-app">
      <Sidebar text={text}/>
      <div>
        <InitialSeciton />
      </div>
      <div className="aboutme">
        <AboutMe />
      </div>
      <div className="proyects">
        <Proyects />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
