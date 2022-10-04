import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartProvider'
import ItemCart from './ItemCart';

const Cart = () => {
  const { cartState, clearCart } = useCartContext();

  const clear = () => {
    clearCart();
  }

  const order = {
    buyer:{
      name:"Ricardo",
      email:"Ricardo@gmail.org",
      number:"456789",
    },
    product: cartState.map(prod => ({id: prod.id, tittle: prod.tittle, price: prod.price, quantity: prod.quantity}))
  }

  const emitirCompra = () => {
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc (orderCollection, order)
    .then(({id}) => console.log(id))
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
      <button to='/cart' className="btn" style={{ marginTop: '0' }} onClick={clear}>Vaciar carrito</button>
      <button className="btn" onClick={emitirCompra} style={{ width: '20vw' }}>Generar orden de compra</button>
    </>
    )
  }

}

export default Cart