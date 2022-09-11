
const Item = ({ products }) => {
  return (
    <>
      <a href="#">
        <div className="item__img">
          <img src={products.image} alt="" />
        </div>
        <div className="item__text">
          <p>{products.tittle}</p>
          <p>{products.price}</p>
        </div>
      </a>
    </>
  )
}

export default Item