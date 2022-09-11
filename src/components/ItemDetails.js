

//ESTRUCTURA html CON LOS DATOS details
const ItemDetails = ({details}) => {
  return (
    <div>
      <div>
        <img alt="" src={details.image} />
      </div>
      <h1>{details.tittle}</h1>
      <p>{details.cuotas}</p>
      <p>{details.price}</p>
    </div>
  )
}

export default ItemDetails