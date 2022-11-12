import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom"
import './Cart.css'

const Cart = () => {
    const { cart, totalCounter, total, clearCart } = useContext(CartContext)

    console.log(cart);
    if (totalCounter === 0) {
        return (
            <div>
                <h1>No tienes productos en el Carro</h1>
                <Link className='button-ItemDetail' to='/'>Volver al listado</Link>
            </div>
        )
    }

    return (
        <div>
            <h1 className='cont-titulo'>Tus Productos:</h1>
            {cart.map(prod => <CartItem key={prod.id} {...prod} />)}
            <h2 className='cont-titulo'>Total: ${total}</h2>
            <button className='button-ItemDetail' onClick={clearCart}>Vaciar Carro</button>
        </div>

    );


}

export default Cart 