import github from "../icons/github.png";
import linkedin from "../icons/linkedin.png";
import logo from "../icons/logo.png";
import emailLogo from "../icons/email.png";

function Sidebar() {
    return(
        <div className="bar">
            <div className="bar-icon">
                <img src={logo} alt="icon-page" />
            </div>
            <div className="bar-icons-container">
                <a href="mailto:tommyolivr@gmail.com?Subject=QUIERO%20CONTACTARME%20CONTIGO!">
                    <img src={emailLogo} alt="email" />
                </a>
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