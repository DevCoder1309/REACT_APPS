function ShoppingList({data}) {
    return (
        <div>
            <h1>Item name: {data.item}</h1> 
            <p>Price: ${data.price}</p>
            
        </div>
    )
}

export default ShoppingList;