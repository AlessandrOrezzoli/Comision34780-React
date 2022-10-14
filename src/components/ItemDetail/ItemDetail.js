import "../../productos"
import Counter from "../Contador/Contador"

const ItemDetail = ({ img, name, category, price, description }) => {

    const handleOnAdd = (counter) => {
        const productToAdd = {
            id, name, price, counter
        }

    
    return (
       <div>
            <img src={img} alt={name}/>
            <h2>{name}</h2>
            <p>{category}</p>
            <p>price: ${price}</p>
            <p>description: {description}</p>

        </div> 

    )
}

export default ItemDetail