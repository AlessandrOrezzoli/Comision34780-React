const ItemDetail = ({ img, name, category, price, description }) => {
    return (
       <div>
            <img src={img} alt={name}/>
            <h2>{name}</h2>
            <p>price: ${price}</p>
            <p>description: {description}</p> 
        </div> 

    )
}

export default ItemDetail