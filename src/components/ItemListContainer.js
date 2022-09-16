import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import getData from "../app/petitions";



const ItemListContainer = () => {
  const [data, setData] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      getData().then(dataContent => setData(dataContent.filter(data => data.category === categoryId)));
    }
    else{
      getData().then(dataContent => setData(dataContent));
    }
  }, [categoryId])

  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity}`)
  }

  return (<>
    <ItemCount initialStock={1} stock={4} onAdd={onAdd} />
    <ItemList data={data} />
  </>
  )
}

export default ItemListContainer;