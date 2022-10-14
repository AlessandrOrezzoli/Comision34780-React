import Item from "../Item/Item"
import "../../productos"

const ItemList = ({ products }) => {
    return (
        <div>
            {products.map(prod => <Item key={prod.id} img={prod.img} name={prod.name} id={prod.id} description={prod.description} price={prod.price} />)}
        </div>
    )
}

export default ItemList