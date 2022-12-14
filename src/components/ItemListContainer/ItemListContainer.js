import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { Waveform } from '@uiball/loaders'
import { getDocs, collection, where, query } from "firebase/firestore"
import { db } from "../../services/firebase"

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        const collectionRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

        getDocs(collectionRef).then(response => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data }
            })
            setProducts(productsAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    
    }, [categoryId])

    if (loading) {
        return (
            <div className="loading">
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
            <h1 className="titulo">Lista de Productos</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer