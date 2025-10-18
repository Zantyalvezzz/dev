import { Link } from "react-router-dom"

function Navbar() {
    return (
            <nav>
                <ul className="navbar">
                    <li> <Link to="/">INICIO</Link></li>
                    <li> <Link to="/servicios">SERVICIOS</Link></li>
                    <li> <Link to="/hosting">HOSTING</Link></li>
                    <li> <Link to="/proyectos">PROYECTOS</Link></li>
                    <li> <Link to="/contacto">CONTACTO</Link></li>
                </ul>
            </nav>
    )
}

export default Navbar