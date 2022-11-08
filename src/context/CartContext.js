import { useState, createContext, useEffect } from "react";
import Swal from "sweetalert2";


export const CartContext = createContext({
    cart: [],
    totalCounter: 0
})

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [totalCounter, SetTotalCounter] = useState(0)
    const [total, setTotal] = useState(0)
   

    useEffect(() => {
        const totalQty = getCounter()
        SetTotalCounter(totalQty)
    }, [cart])//eslint-disable-line

    useEffect(() => {
        const total = getTotal()
        setTotal(total)
    }, [cart])//eslint-disable-line

    const addItem = (productToAdd, counter) => {
        if (!isInCart(productToAdd.id)) {
            productToAdd.counter = counter
            setCart([...cart, productToAdd])
            Swal.fire({
                text: "Se agrego el producto",
                icon: 'success',
                confirmButtonText: 'Continuar'
            })
        } else {
            const cartUpdated = cart.map(prod => {
                if (prod.id === productToAdd.id) {
                    const productUpdated = {
                        ...prod,
                        counter: counter
                    }
                    Swal.fire({
                        text: "Se modifico la cantidad en el carrito",
                        icon: 'success',
                        confirmButtonText: 'Continuar'
                    })
                    return (
                        productUpdated
                    )
                } else {
                    return prod
                }
            })

            setCart(cartUpdated)
        }
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const cartWithoutProduct = cart.filter(prod => prod.id !== id)
        setCart(cartWithoutProduct)
    }

    const getCounter = () => {
        let accu = 0
        cart.forEach(prod => {
            accu += prod.counter
        })
        return accu
    }

    const getTotal = () => {
        let accu = 0
        cart.forEach(prod => {
            accu += prod.counter * prod.price
        })
        return accu
    }

    const clearCart = () => {
        setCart([])
    }

    const getProductCounter = (id) => {
        const product = cart.find(prod => prod.id === id)
        return product?.counter
    }

    return (
        <CartContext.Provider value={{ isInCart, cart, addItem, removeItem, totalCounter, total, clearCart, getProductCounter, }}>
            {children}
        </CartContext.Provider>
    )
}