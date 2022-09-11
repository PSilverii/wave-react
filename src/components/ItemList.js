import Item from "./Item";


const ItemList = ({ data }) => {

  return (
    data.map(products => <Item key={products.id} products={products}/>)
  )
}

export default ItemList


