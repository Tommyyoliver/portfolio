import { useEffect, useState } from "react";
import github from "../icons/github.png";
import linkedin from "../icons/linkedin.png";
import logo from "../icons/logo.png";

function Sidebar({ text }) {

    const [animation, setAnimation] = useState("");

    useEffect(()=> {
        setTimeout(()=> {
            setAnimation("animate-out");
        }, 500);
        setAnimation("animation-in")
    }, [text])

    return(
        <div className="bar">
            <div className="bar-icon">
                <img src={logo} alt="icon-page" />
            </div>
            <div className={`bar-title-container ${animation}`}>
                <h5>{text}</h5>
            </div>
            <div className="bar-icons-container">
                <a href="https://www.linkedin.com/in/tommy-oliver-937827252/" target="_blank">
                    <img src={linkedin} alt="linkedin" />
                </a>
                <a href="https://github.com/Tommyyoliver" target="_blank">
                    <img src={github} alt="github" />
                </a>
            </div>
        </div>
    )
}

export { Sidebar };