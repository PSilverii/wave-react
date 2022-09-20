import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import getData from "../app/api/petitions";



const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [tittle, setTittle] = useState();
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      getData().then(dataContent => setData(dataContent.filter(data => data.category === categoryId)));
      setTittle(categoryId);
    }
    else {
      getData().then(dataContent => setData(dataContent));
    }
  }, [categoryId])

  return (<>
    <div className="product__tittle">
      <h1>{tittle ? tittle[0].toUpperCase() + tittle.substring(1) : 'Cargando Titulo'}</h1>
    </div>
    <ItemList data={data} />
  </>
  )
}

export default ItemListContainer;