import { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import getData from "../app/petitions";



const ItemListContainer = () => {
  /*CATALOGO CON MAPS Y PROMISES - seteo 'data' con promesa (ARCHIVO EN src/app/petitions.js)*/
  const [data, setData] = useState([]);
  /*después de los 2s del setTimeout, traigo retProducts de getData (src/app/petitions.js), lo guardo en dataDetails y lo seteo en const data */
  useEffect(() => {
    getData().then(dataContent => {
      setData(dataContent);
    })
  }, [])

/*CONTADOR CON BOTON - muestro por consola la cantidad que eligió le usuarie*/
const onAdd = (quantity) => {
  console.log(`Compraste ${quantity}`)
}

return (<>
  {/*  CONTADOR CON BOTÓN -   */}
  <ItemCount initialStock={1} stock={4} onAdd={onAdd} />
  {/* CATALOGO CON MAPS Y PROMISES */}
  <ItemList data={data} />
</>
)
}

export default ItemListContainer;