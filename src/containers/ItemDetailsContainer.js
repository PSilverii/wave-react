import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetails from "../components/ItemDetails";
import { getProducts } from "../app/api/firebaseApi";

const ItemDetailsContainer = () => {

  const [details, setDetails] = useState([]);

  const { detailsId } = useParams();
  useEffect(() => {
    getProducts().then(res => setDetails(res.find(details => details.id === detailsId)));
  }, [detailsId])

  return (<>
    <ItemDetails details={details} />
  </>
  )
}

export default ItemDetailsContainer