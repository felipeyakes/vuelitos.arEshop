import './Item.css'
import { NavLink, Link } from 'react-router-dom'

const Item = ({id, name, img, price, stock}) => {

    return (
        <article className="cardItem">
            <header className="header">
                <h2 className='itemHeader'>{name}</h2>
            </header>

            <picture>
                <img src={img} alt={name} className="itemImg"/>
            </picture>

            <section>
                <p className='info'>${price}</p>

                <p className='info'>Stock: {stock}</p>
            </section>

            <footer className='itemFooter'>
                <Link to={'/item/${id}'} className='option'>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item