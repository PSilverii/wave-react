import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartProvider'
import ItemCart from './ItemCart';

const Cart = () => {
  const { cartState, clearCart } = useCartContext();

  const clear = () => {
    clearCart();
  }

  if (cartState.length === 0) {
    return (<>
      <div className='product__tittle' style={{ marginTop: '150px' }}>
        <p>Cart</p>
      </div>
      <div>
        <p>Aun no tenes nada en el carrito</p>
        <Link to='/'>Ver la tienda</Link>
      </div>
    </>
    )

  } else {
    return (<>
      <div className='product__tittle' style={{ marginTop: '150px' }}>
        <p>Cart</p>
      </div>
      {
        cartState.map(products => <ItemCart key={products.id} products={products} />)
      }
      <button to='/cart' className="btn" onClick={clear}>Vaciar carrito</button>
    </>
    )
  }

}

export default Cart