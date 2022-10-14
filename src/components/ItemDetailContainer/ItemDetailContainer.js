import { useState, useEffect } from "react"
import { getProductById } from "../../productos"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'
import { Waveform } from '@uiball/loaders'
import "../../productos"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(() => {
        setLoading(true)
        getProductById(productId)
            .then(products => {
                setProduct(products)
            }).finally(() => {
                setLoading(false)
            })
    }, [productId])

    if (loading) {

        return (
            <div>
                < Waveform
                    size={40}
                    lineWeight={3.5}
                    speed={1}
                    color="black"
                />
            </div>
        )
    }

    return (
        <>
        <h2>Detalle de Producto</h2>
        <ItemDetail {...product}/>
        </>
    )

}

export default ItemDetailContainer