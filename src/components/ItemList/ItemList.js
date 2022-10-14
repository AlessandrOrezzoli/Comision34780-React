import Item from "../Item/Item"
import "../../productos"
import "./ItemList.css"

const ItemList = ({ products }) => {
    return (
        <div className="lista-item d-flex flex-wrap">
            {products.map(prod => <Item key={prod.id} img={prod.img} name={prod.name} id={prod.id} description={prod.description} price={prod.price} />)}
        </div>
    )
}

export default ItemList