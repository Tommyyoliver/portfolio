import arrowDown from "../icons/down-arrow.png";

function InitialSeciton() {
    return(
        <div className="initialSection-container">
            <div className="name-container">
                <h1 className="name-front">Tommy</h1>
                <h1 className="name-back">Tommy</h1>
                <h1 className="lastname-front">Oliver</h1>
                <h1 className="lastname-back">Oliver</h1>
                <div className="cube"></div>
            </div>
            <div className="description">
                <h2 className="description-one">Desarrollador</h2>
                <h3 className="description-two">Front-End</h3>
            </div>
            <div className="arrowDown">
                <img src={arrowDown} alt="arrow-down" />
            </div>
        </div>
    )
}

export { InitialSeciton };