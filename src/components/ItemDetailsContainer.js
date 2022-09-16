import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetails from "./ItemDetails";

const productDetails = [
  {
    id: '1',
    tittle: 'Gato Uno',
    price: 5000,
    image: 'http://placekitten.com/g/400/400',
    cuotas: '6 sin interes',
    plazoDevolucion: 'el plazo de devolución es de 40 días',
    category: 'pantalones',
  },
  {
    id: '2',
    tittle: 'Gato Dos',
    price: '4500',
    image: 'http://placekitten.com/g/150/200',
    cuotas: '12 sin interes',
    plazoDevolucion: 'el plazo de devolución es de 100 días',
    category: 'remeras',
  }
];

const ItemDetailsContainer = () => {

  const [details, setDetails] = useState([]);

  const { detailsId } = useParams();

  useEffect(() => {
    const getDetails = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productDetails)
      }, 2000);
    });
    getDetails.then(res => setDetails(res.find(details => details.id === detailsId)));
  }, [detailsId])

  return (<>
    <ItemDetails details={details} />
  </>
  )
}

export default ItemDetailsContainer