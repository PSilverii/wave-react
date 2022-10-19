import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../views/Home";
import ItemDetailContainer from "../containers/ItemDetailsContainer";
import Categories from "../views/Categories";
import Cart from "../components/Cart";
import OrderForm from "../components/OrderForm";


const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/category/:categoryId" element={<Categories />} />
            <Route path="/details/:detailsId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orderform" element={<OrderForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router;