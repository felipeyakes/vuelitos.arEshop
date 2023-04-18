import CartWidget from '../cartWidget/cartWidget';
import './styles.css'
import logo from './assets/logo.png'

import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <nav className="nav">
            <img src={logo} alt="Logo vuelitos.ar" className="logoVuelitosAR"/>
            <div className="navOptions">
                <NavLink to={`/category/paseos`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Paseos</NavLink>
                <NavLink to={`/category/programas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Programas</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar

