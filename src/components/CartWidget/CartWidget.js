import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"


const CartWidget = () => {
    const { totalCounter } = useContext(CartContext)

    return (
        <div>
            <Link to='/cart'>
                <button><i class="fa fa-cart-plus" aria-hidden="true"> </i> {totalCounter}</button>
            </Link>
        </div>
    )
}

export default CartWidget