import React from 'react'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import './CartItem.css'



const CartItem = ({id,  name, price, counter}) => {
    const {removeItem} = useContext (CartContext);

return (    
    <div className='d-flex cont-CartItem'>
        <h1 className='titulos-pro' >{name}</h1>
        <p className='titulos-pro'>Precio U: ${price}</p>
        <p className='titulos-pro'>Cantidad {totalCounter}</p>
        <p className='titulos-pro'>total: ${counter * price}</p>
        <button className='button-ItemDetail' onClick={()=>removeItem(id)}> Eliminar</button>
    </div>
)
}

export default CartItem