import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'
import { Waveform } from '@uiball/loaders'
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(() => {
        const docRef = doc(db, 'products', productId)
        getDoc(docRef).then(response => {
            const data = response.data()
            const productAdapted = { id: response.id, ...data }
            setProduct(productAdapted)
        }).finally(() => {
            setLoading(false)
        })
       
    }, [productId])

    if (loading) {

        return (
            <div className="loading">
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