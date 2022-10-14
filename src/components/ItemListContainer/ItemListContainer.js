import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory } from "../../productos"
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { Waveform } from '@uiball/loaders'

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        const productosFunction = categoryId ? getProductsByCategory : getProducts
        productosFunction(categoryId).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId])

    if (loading) {
        return (
            <div>
                <Waveform
                    size={40}
                    lineWeight={3.5}
                    speed={1}
                    color="black"
                />
            </div>
        )
    }

    return (
        <div>
            <h1>Lista de Productos</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer