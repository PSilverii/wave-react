import { useCartContext } from "../context/CartProvider";

const ItemCart = ({ products }) => {

  const { removeItem } = useCartContext();
  const remove = () => {
    removeItem(products.id);
  }
  return (
    <>
      <div className="product__img">
        <img src={products.image.firstView} alt="" />
      </div>
      <div className="product__text--p">
        <p>{products.tittle}</p>
        <p>Precio por unidad: ${products.price}</p>
        <p>Seleccionaste {products.quantity} unidades</p>
        <p>Precio de productos seleccionados: ${products.price * products.quantity}</p>
        <button to='/cart' className="btn" onClick={remove}>Eliminar producto del carrito</button>
      </div>
    </>
  )
}

export default ItemCart