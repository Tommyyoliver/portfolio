import logo from "../icons/logo-crypto.png";

function Proyects() {
    return (
        <div className="projects-container">
            <div className="project-title-container">
                <h2>Proyectos</h2>
            </div>
            <div className="project-caption-container">
                <h3>MIS TRABAJOS</h3>
            </div>
            <div className="projects">
                <div className="proyect">
                    <a href="https://tommyyoliver.github.io/crypto-ranking/" target="_blank">
                        <div className="project-header">
                            <h3>Crypto Ranking</h3>
                            <img src={logo} alt="logo-crypto" />
                        </div>
                        <h5>Tabla de clasificación de criptomonedas utilizando API coingecko</h5>
                        <h6>React - Sass</h6>
                    </a>
                </div>
                <div className="proyect">
                    <a href="https://tommyyoliver.github.io/rick-and-morty-api/" target="_blank">
                        <div className="project-header">
                            <h3>Rick and Morty API</h3>
                        </div>
                        <h5>Consumo de API de Rick and Morty con fetch utilizando React</h5>
                        <h6>React</h6>
                    </a>
                </div>
            </div>
        </div>
    )
}

export { Proyects };