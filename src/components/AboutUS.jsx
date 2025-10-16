import aboutImg2 from '../assets/comotrabajamsss.jpg'; 
import aboutImg from '../assets/logofake.webp';

function AboutUS() {
    return (
        <div className="about-us-container">
            <div className="about-us-1">
                    <h2>Sobre Nosotros</h2>
                    <p>Somos una empresa dedicada a la creación de páginas web a medida, utilizamos tecnologías modernas como React y Node.js para ofrecer soluciones eficientes y escalables.</p>
                    <img src={aboutImg} alt="" />
            </div>
            <div className="about-us-2">
                    <h2>¿Cómo trabajamos?</h2>
                    <p>Trabajamos en estrecha colaboración con nuestros clientes para entender sus necesidades y ofrecer soluciones personalizadas. Nuestro enfoque ágil nos permite adaptarnos rápidamente a los cambios y garantizar la satisfacción del cliente.</p>
                    <img src={aboutImg2} alt="" />
                </div>
            </div>
    )
}

export default AboutUS