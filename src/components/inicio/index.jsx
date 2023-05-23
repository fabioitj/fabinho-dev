import "./styles.scss"
import Typewriter from "typewriter-effect"

function Inicio() {
    return (
        <section id="inicio" className="inicio">
            <h3 className="inicio__fabio">Fabio é,</h3>
            <h2 className="inicio__is">
                <Typewriter
                    options={{
                        strings: ['Programador!', 'Estudioso!', 'Baixista!'],
                        autoStart: true,
                        loop: true,
                    }}        
                />
            </h2>
            {/* <img className="inicio__image" src={astronaut}/> */}
        </section>
    )
}

export default Inicio;