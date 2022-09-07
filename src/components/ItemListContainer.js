import { useState, useEffect } from "react";
import ProductTittle from "./ProductTittle";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import getData from "../app/petitions";


const ItemListContainer = ({ product }) => {
  /*CATALOGO CON MAPS Y PROMISES - seteo 'data' con promesa (ARCHIVO EN src/app/petitions.js)*/
  const [data, setData] = useState([]);
  /*después de los 2s del setTimeout, traigo retProducts de getData (src/app/petitions.js), lo guardo en dataDetails y lo seteo en const data */
  useEffect(() => {
    getData().then(dataDetails => {
      setData(dataDetails);
    })
  }, [])

  /*CONTADOR CON BOTON - muestro por consola la cantidad que eligió le usuarie*/
  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity}`)
  }
  /*CONTADOR CON BOTON - seteo de stock para prueba*/
  const stock = 4;
  /*CONTADOR CON BOTON - al setear const stock en 0, cancela el boton 'agregar al carrito' y muestra 0 en numero del contador(archivo ItemCount.js)*/
  let initialStock = () => (stock <= 0) ? initialStock = 0 : initialStock = 1;

  return (<>
    {/*  CREA TU LANDING - Traigo componente ProductTittle con Gretting  */}
    <ProductTittle greeting={product} className="test" />{/*   */}
    {/*  CONTADOR CON BOTÓN -   */}
    <ItemCount initial={initialStock} stock={stock} onAdd={onAdd} />
    {/* CATALOGO CON MAPS Y PROMISES */}
    <ItemList data={data} />
  </>
  )
}

export default ItemListContainer;