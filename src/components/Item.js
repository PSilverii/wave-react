
const Item = ({ info }) => {
  return (
    <>
      <a href="#">
        <div className="item__img">
          <img src={info.image} alt="" />
        </div>
        <div className="item__text">
          <p>{info.tittle}</p>
          <p>{info.price}</p>
        </div>
      </a>
    </>
  )
}

export default Item