import { useState, useEffect } from 'react'


const ItemCount = ({ initialStock, stock, onAdd }) => {
  const [count, setCount] = useState(initialStock);

  useEffect(() => {
    setCount(initialStock);
  }, [initialStock])


  return (<>
    <div className="item__count--between">
      <button className="item__count--btn" disabled={count <= 1} onClick={() => setCount(count - 1)}> - </button>
      <span className="item__count--number">{count}</span>
      <button className="item__count--btn" disabled={count >= stock} onClick={() => setCount(count + 1)}> + </button>
    </div>
    <button id="btn__cart" className="btn" disabled={stock <= 0 || count == 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
    <button className="btn"></button>
  </>
  )
}

export default ItemCount;