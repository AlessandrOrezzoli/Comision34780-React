import React from 'react'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'



const CartItem = ({id,  name, price, counter}) => {
    const {removeItem} = useContext (CartContext);

return (    
    <div>
        <h1>{name}</h1>
        <p>Precio U: ${price}</p>
        <p>total: ${counter * price}</p>
        <button onClick={()=>removeItem(id)}> Eliminar</button>
    </div>
)
}

export default CartItem