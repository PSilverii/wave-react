import ProductTittle from "./ProductTittle";
import ItemCount from "./ItemCount";



const ItemListContainer = ({ product }) => {
  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity}`)
  }

  const stock = 10;

  let initialStock = () => (stock <= 0) ? initialStock = 0 : initialStock = 1;

  return (<>
    <ProductTittle greeting={product} className="test" />
    <ItemCount initial={initialStock} stock={stock} onAdd={onAdd} />
  </>
  )
}

export default ItemListContainer;