import { Link } from 'react-router-dom'

const Item = ({ id , img, name, category, price }) => {

    return (
        <div key={id}>
            <img src={img} alt={name} style={{ width: 100 }} />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <Link to={`/detail/${id}`}>
                <button>Ver detalle</button>
            </Link>
        </div>

    )
}

export default Item