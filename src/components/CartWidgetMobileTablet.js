


const CartWidgetMobileTablet = () => {
  return (<>
    <label htmlFor="check__cart__mobile">
      <p className="nav__btn__mobile--icon">shopping_cart</p>
    </label>
    <input type="checkbox" id="check__cart__mobile" />
    <ul className="nav__btn__cart__mobile">
      <li>
        <p>Aún no tienes nada en tu carrito</p>
      </li>
    </ul>
  </>
  )
}

export default CartWidgetMobileTablet