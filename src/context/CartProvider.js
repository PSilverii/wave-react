import { createContext, useState, useContext } from 'react';

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
    const { quantity = 0 } = cartState.find(prod => prod.id === item.id) || {};

    const newCart = cartState.filter(prod => prod.id !== item.id);

    setCartState([...newCart, { ...item, quantity: quantity + newQuantity }]);
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