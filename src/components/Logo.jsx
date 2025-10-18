import { Link } from 'react-router-dom'
import logoImg from '../assets/logo.png'

function Logo() {
    return (
        <div className="logo">
        <Link to="/"><img src={logoImg} alt="Logo" /></Link>
        </div>
    )
}

export default Logo