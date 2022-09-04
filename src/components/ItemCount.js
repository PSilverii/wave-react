import { useState, useEffect } from 'react'


const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    setCount(initial);
  }, [initial])

  return (<>
    <div className="item__count">
      <div className="item__count--between">
        <button className="item__count--btn" disabled={count <= 1} onClick={() => setCount(count - 1)}> - </button>
        <span className="item__count--number">{count}</span>
        <button className="item__count--btn" disabled={count >= stock} onClick={() => setCount(count + 1)}> + </button>
      </div>
    </div>
    <div>
      <button id="btn__cart" className="btn" disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  </>
  )
}

export default ItemCount;