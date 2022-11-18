import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import Swal from "sweetalert2";
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from '../../services/firebase/index'
import './Checkout.css'

import { useNavigate } from "react-router-dom"

const Checkout = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [mail, setMail] = useState("")
    const { cart, total, clearCart } = useContext(CartContext)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const createOrder = async () => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name: { name },
                    phone: { phone },
                    mail: { mail }
                },
                items: cart,
                total: total
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodCounter = productAddedToCart?.counter

                if (stockDb >= prodCounter) {
                    batch.update(doc.ref, { stock: stockDb - prodCounter })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                clearCart()

                setTimeout(() => {
                    navigate('/')
                }, 3000)

                Swal.fire({
                    text: `El id de su orden es: ${orderAdded.id}`,
                    icon: 'success',
                    confirmButtonText: 'Continuar'
                })

            } else {
                Swal.fire({
                    text: 'hay productos que estan fuera de stock',
                    icon: 'error',
                    confirmButtonText: 'Continuar'
                })
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

    if (loading) {
        return <h1>Se esta generando su orden...</h1>
    }

    return (
        <div>
            <form >
                <h2>Datos del Comprador</h2>
                <input className="imput-Checkout" type="text" placeholder="Ingrese su Nombre" onChange={e => setName(e.target.value)} />
                <input className="imput-Checkout" type="number" placeholder="Ingrese su Telefono" onChange={e => setPhone(e.target.value)} />
                <input className="imput-Checkout" type="email" placeholder="Ingrese su Email" onChange={e => setMail(e.target.value)} />
            </form>
            <button className='button-ItemDetail' onClick={createOrder}>Generar Orden</button>
        </div>
    )
}

export default Checkout