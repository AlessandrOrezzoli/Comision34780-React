import './ItemListContainer.css'
import { useState, useEffect } from "react"
import { getProducts } from "../../productos"

const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    useEffect(()=> {
        getProducts()
            .then(products => {
                setProducts(products)

            })
    }, [])

    return (
        <div>
            <h1>Lista de Productos</h1>
            { products.map(prod => {
                return (
                    <div key={prod.id}>
                        <img src={prod.img} alt={prod.nombre} style={{ width: 100}}/>
                        <h3>{prod.nombre}</h3>
                        <p>Price: ${prod.price}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemListContainer