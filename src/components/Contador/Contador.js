import { useState } from "react"

const Counter = ({ stock, initial = 1, onAdd }) => {
    const [counter, setCounter] = useState(initial)

    const restar = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    const sumar = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }

    return (
        <div>
            <div>
                <div>
                    <button onClick={restar}>-</button>
                    <p>{counter}</p>
                    <button onClick={sumar}>+</button>
                </div>
                <div>
                    <p>Stock disponible: {stock} </p>
                </div>
            </div>
            <div>
                <button onClick={() => onAdd(counter)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Counter