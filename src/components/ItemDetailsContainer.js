import { useState, useEffect } from "react";
import ItemDetails from "./ItemDetails";
//DESAFIO DETALLE DE PRODUCTO - creo los detalles del producto uno
const productDetails = {
  id: '1',
  tittle: 'Gato Uno',
  price: 5000,
  image: 'http://placekitten.com/g/400/400',
  cuotas: '6 sin interes',
  plazoDevolucion: 'el plazo de devolución es de 40 días',
};

const ItemDetailsContainer = () => {
  const [details, setDetails] = useState([]);
  //TRAIGO LOS DETALLES CON LA PROMESA Y HAGO CAMBIO DE ESTADO EN const details
  useEffect(() => {
    const getDetails = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productDetails)
      }, 2000);
    });
    getDetails.then(details => {
      setDetails(details);
    })
  }, [])

  //DEVUELVO COMPONENTE ItemDetails Y LE PASO details QUE ME TRAJO LA PROMESA
  return (<>
    <ItemDetails details={details} />
  </>
  )
}

export default ItemDetailsContainer