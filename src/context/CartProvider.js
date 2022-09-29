import { createContext, useState, useContext } from 'react';
//DESAFIO CONTEXT.creo una funcion que devuelve el contenido del CartContext, para no tener que importar useContext y CartContext en cada archivo. Directamente importo esta función.
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartState, setCartState] = useState([]);

  const clearCart = () => setCartState([]);

  const isInCart = (id) => {
    return cartState.find(prod => prod.id === id) ? true : false;
  }

  const removeItem = (id) => {
    setCartState(cartState.filter(prod => prod.id !== id));
  };

  const addItem = (item, newQuantity) => {
    const {quantity = 0} = cartState.find(prod => prod.id === item.id) || {}; //DESAFIO CONTEXT.Si el find encuentra el producto en cartState, hago un destructuring y pido la propiedad quantity que ya fue seteada previamente. Si no encuentra una propiedad llamada quantity, carga el valor de quantity vacío, para que no existan errores de tipos de datos en relación a la ultima línea de esta lógica.

    const newCart = cartState.filter(prod => prod.id !== item.id);//DESAFIO CONTEXT. creo una variable contenedora que filtra los productos que vienen, exceptuando los que tienen el mismo id.
    
    setCartState([...newCart, {...item, quantity: quantity + newQuantity}]);//DESAFIO CONTEXT seteo cartState con NewCart. Agrego objeto item que quedo por fuera del filter y le pongo quantity como prop de objeto. A esa prop le sumo el valor de la const quantity, el cual extraigo en la primer lógica, y la newQuantity que viene como parametro de la función.
  }


  return (
    <CartContext.Provider value={{
      cartState,
      setCartState,
      clearCart,
      isInCart,
      removeItem,
      addItem,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
export const CartContext = createContext();