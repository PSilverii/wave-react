import React, { useState } from 'react'
import { useCartContext } from '../context/CartProvider'
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const OrderForm = () => {
  const { cartState } = useCartContext();
  const [order, setOrder] = useState({
    name: "",
    email: "",
    number: "",
    product: cartState.map(prod => ({ id: prod.id, tittle: prod.tittle, price: prod.price, quantity: prod.quantity }))
  })

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChange = (e) => {
    const { target } = e
    const { name, value } = target;
    const newOrder = {
      ...order,
      [name]: value,
    }
    setOrder(newOrder)
  }

  const emitirCompra = () => {
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then(({ id }) => alert('Tu N° de orden es: ' + id))
    
  }

  return (
    <>
      <section className="form">
        <div className="page__tittle">
          <h1>Completá tus datos para finalizar la compra</h1>
        </div>
        <div className="order__form">
          <form onSubmit={handleSubmit}>
            <div className="form__group">
              <label className="form__label">Nombre</label>
              <input className="form__input"
                type="text"
                placeholder="Carla Gutierrez"
                name='name'
                value={order.name}
                onChange={handleChange}
              />
            </div>
            <div className="form__group">
              <label className="form__label">Email</label>
              <input className="form__input"
                type="text"
                placeholder="nombre@email.com"
                name='email'
                value={order.email}
                onChange={handleChange}
              />
            </div>
            <div className="form__group">
              <label className="form__label">Teléfono</label>
              <input className="form__input"
                type="text"
                placeholder="1124547898"
                name='number'
                value={order.number}
                onChange={handleChange}
              />
            </div>
            <div className="form__group">
              <label className="form__label">Contraseña</label>
              <input className="form__input"
                type="password"
              />
            </div>
            <button type='submit' className="btn" onClick={emitirCompra} style={{ width: '20vw' }}>Generar orden de compra</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default OrderForm