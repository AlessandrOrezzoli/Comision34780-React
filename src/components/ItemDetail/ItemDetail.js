import "../../productos"
import Counter from "../Contador/Contador"

const ItemDetail = ({ id, img, name, category, price, description, stock }) => {

    const handleOnAdd = (counter) => {
        const productToAdd = {
            id, name, price, counter
        }
        console.log(productToAdd)
    }
    
    return (
       <div key= {id}>
            <img src={img} alt={name}/>
            <h2>{name}</h2>
            <p>{category}</p>
            <p>price: ${price}</p>
            <p>description: {description}</p>
            <div> <Counter onAdd={handleOnAdd} stock={stock} /> </div>
        </div> 

    )
}

export default ItemDetail