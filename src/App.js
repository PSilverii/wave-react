import "./styles/css/App.css";
import Router from "./app/Router";
import CartProvider from "./context/CartProvider";

const App = () => (
  <CartProvider>
    <Router />
  </CartProvider>
);

export default App;
