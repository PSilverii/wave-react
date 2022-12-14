import { Link } from "react-router-dom";

const Item = ({ products }) => {
  return (
    <>
      <Link to={`/details/${products.id}`}>
        <div className="product__img">
          <img src={products.imageFirstView} alt={products.textAlt} />
        </div>
        <div className="product__text--p">
          <p>{products.tittle}</p>
          <p>${products.price}</p>
        </div>
      </Link>
    </>
  )
}

export default Item