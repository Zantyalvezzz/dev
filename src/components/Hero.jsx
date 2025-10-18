import heroImg from '../assets/heroimg.jpg';
import Button from './Button';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>Creamos tu página web a medida</h1>
        <p>Desarrollamos soluciones con React y tecnologías modernas bla bla</p>
        <Button 
        text="Contáctanos"
        color="#2e699dff"
        size={25}
        />
      </div>
    </section>
  );
}

export default Hero