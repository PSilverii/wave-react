import { Link } from "react-router-dom";

const Item = ({ products }) => {
  return (
    <>
      <Link to={`/details/${products.id}`}>
        <div className="item__img">
          <img src={products.image} alt="" />
        </div>
        <div className="item__text">
          <p>{products.tittle}</p>
          <p>${products.price}</p>
        </div>
      </Link>
    </>
  )
}

export default Item