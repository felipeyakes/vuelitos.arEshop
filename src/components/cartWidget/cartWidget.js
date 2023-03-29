import cart from './assets/cart.svg';
import './styles.css'

const CartWidget = () => {
    return(
        <div className="divCart">
            <img src={cart} alt="cart-widget"/>
            <p className="circulo">0</p>
        </div>
    )
}

export default CartWidget