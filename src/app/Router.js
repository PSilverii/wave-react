import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../views/Home";
import ItemDetailContainer from "../containers/ItemDetailsContainer";
import Categories from "../views/Categories";




const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/category/:categoryId" element={<Categories />} />
            <Route path="/details/:detailsId" element={<ItemDetailContainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default Router;