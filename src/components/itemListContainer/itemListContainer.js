import { useEffect, useState } from 'react'
import './styles.css'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../itemList/ItemList';

import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])


    return(
        <div>
            <h1 className="h1Greeting">{greeting}</h1>

            <div className='productsDivContainer'>
                <div className='productsDiv'>
                    <ItemList products={products}/>
                </div>
            </div>

        </div>
    )
}

export default ItemListContainer