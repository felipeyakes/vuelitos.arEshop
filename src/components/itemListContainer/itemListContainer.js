import './styles.css'

const ItemListContainer = ({greeting}) => {
    return(
        <div>
            <h1 className="h1Greeting">{greeting}</h1>
        </div>
    )
}

export default ItemListContainer