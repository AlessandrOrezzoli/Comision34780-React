import { useState, useEffect } from "react"
import { getProductById } from "../../productos"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId)
            .then(product => {
                setProduct(product)
            })
    }, [])


    return (
        <>
        <h2>Detalle de Producto</h2>
        <ItemDetail {...product}/>
        </>
    )

}

export default ItemDetailContainer