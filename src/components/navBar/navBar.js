import CartWidget from '../cartWidget/cartWidget';
import './styles.css'
import logo from './assets/logo.png'

const NavBar = () => {
    return(
        <nav className="nav">
            <img src={logo} alt="Logo vuelitos.ar" className="logoVuelitosAR"/>
            <div className="navOptions">
                <a href="#">Inicio</a>
                <a href="#">Paseos</a>
                <a href="#">Devoluciones</a>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar