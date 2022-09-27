import { useCartContext } from "../context/CartProvider"

const CartWidgetDesktop = () => {
  const { cartState } = useCartContext();
  return (<>
    <label htmlFor="check__cart__desktop">
      <p className="nav__btn__desktop--icon">shopping_cart</p>
    </label>
    <p>{cartState.length}</p>
    <input type="checkbox" id="check__cart__desktop" />
    <ul className="nav__btn__cart__desktop">
      <li>
        <p>!! EN CONSTRUCCION !!</p>
      </li>
    </ul>
  </>
  )
}

export default CartWidgetDesktop