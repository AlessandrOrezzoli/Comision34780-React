import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ id, img, name, category, price }) => {

    return (
        <div className='d-flex'>
            <div className='contenedor-item'>
                <div key={id}>
                    <img src={img} alt={name} style={{ width: 100 }} />
                    <h3>{name}</h3>
                    <p>Price: ${price}</p>
                    <Link to={`/detail/${id}`}>
                        <button className='button-Item'>Ver Detalle</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Item