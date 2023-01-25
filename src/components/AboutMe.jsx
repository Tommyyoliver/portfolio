import emailLogo from "../icons/email.png";

function AboutMe () {

    window.addEventListener("scroll", () => {
        const $title = document.querySelector(".about-container");
        const altura = window.innerHeight/2.6;
        let distancia = $title.getBoundingClientRect().top;
    })


    return (
        <div className="about-container">
            <div className="about-title-container">
                <h2>SOBRE MÍ</h2>
            </div>
            <div className="about-caption-container">
                <h3>:) QUIÉN SOY</h3>
            </div>
            <div className="about-text-container">
                <p>¡Hola! Mi nombre es <span>Tommy</span>, construyo paginas web. Soy un Desarrollador Front-End autodidacta iniciado en 2022 apasionado por este sector.</p>
                <p>Disfruto llevar a cabo la maquetación e interactividad de interfaces web, así como la optimización.</p>
                <p>Mi <span>objetivo</span> ha sido el mismo desde un principio: obtener la atencion del usuario, más allá de un buen diseño, con una interfaz útil e interactiva.</p>
            </div>
            <div className="btn-container">
                <div className="btn">
                    <a href="mailto:tommyolivr@gmail.com?Subject=QUIERO%20CONTACTARME%20CONTIGO!">
                        <div>
                            <p>CONTACTAME</p>
                            <img src={emailLogo} alt="email" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export { AboutMe };