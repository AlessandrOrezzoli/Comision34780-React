import { useState } from "react"
import './Contador.css'

const Counter = ({ stock, initial = 0, onAdd }) => {
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
        <div >
            <div>
                <div className="cont-Contador">
                    <button className="button-Contador" onClick={restar}>-</button>
                    <p className="cont-Num">{counter}</p>
                    <button className="button-Contador" onClick={sumar}>+</button>
                </div>
                <div>
                    <p className="cont-stock">Stock disponible: {stock} </p>
                </div>
            </div>
            <div>
                <button className="button-agregar" onClick={() => onAdd(counter)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Counter