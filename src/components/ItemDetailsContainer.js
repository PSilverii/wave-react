import { useState, useEffect } from "react";
import ItemDetails from "./ItemDetails";

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

  useEffect(() => {
    const getDetails = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productDetails)
      }, 2000);
    });
    getDetails.then(detailsContent => {
      setDetails(detailsContent);
    })
  }, [])
  
  return (<>
    <ItemDetails details={details} />
  </>
  )
}

export default ItemDetailsContainer