


const CartWidgetDesktop = () => {
  return (<>
    <label htmlFor="check__cart__desktop">
      <p className="nav__btn__desktop--icon">shopping_cart</p>
    </label>
    <input type="checkbox" id="check__cart__desktop" />
    <ul className="nav__btn__cart__desktop">
      <li>
        <p>Aún no tienes nada en tu carrito</p>
      </li>
    </ul>
  </>
  )
}

export default CartWidgetDesktop