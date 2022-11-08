import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom"

const Cart = () => {
    const { cart, totalCounter, total, clearCart } = useContext(CartContext)

    console.log(cart);
    if (totalCounter === 0) {
        return (
            <div>
                <h1>No tienes productos seleccionados</h1>
                <Link to='/'>Volver al listado</Link>
            </div>
        )
    }

    return (
        <div>
            <h1>Tus productos:</h1>
            {cart.map(prod => <CartItem key={prod.id} {...prod} />)}
            <h1>Total: ${total}</h1>
            <button onClick={clearCart}>Eliminar todo</button>
            <div>
            </div>
        </div>

    );


}

export default Cart 