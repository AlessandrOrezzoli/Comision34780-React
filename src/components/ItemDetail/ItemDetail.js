import Counter from "../Contador/Contador"
import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import './ItemDetail.css'
import { Link } from "react-router-dom"

const ItemDetail = ({ id, img, name, category, price, description, stock }) => {

    const [added, setAdded] = useState(false);
    const { addItem, getProductCounter } = useContext(CartContext)

    const handleOnAdd = (counter) => {
        const productToAdd = {
            id, name, price, counter
        }
        addItem(productToAdd, counter)
        setAdded(true);
    }

    const counterAdded = getProductCounter(id)

    return (
        <div className="contenedor-itemDetail" key={id}>
            <img src={img} alt={name} width="100px" />
            <h2>{name}</h2>
            <p>{category}</p>
            <p>price: ${price}</p>
            <p>description: {description}</p>
            <div>
                {stock !== 0 ? <Counter onAdd={handleOnAdd} stock={stock} initial={counterAdded} /> : <p>No hay Stock</p>}
                {!added ? true :
                    <div>
                        <Link to='/cart' className="button">Ir al carrito</Link>
                        <Link to='/' className="button">Seguir comprando</Link>
                    </div>}
                {added ? true
                    : <Link to='/' className="button">Seguir comprando</Link>}
            </div>
        </div>

    )
}

export default ItemDetail