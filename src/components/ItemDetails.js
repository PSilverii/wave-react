import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useCartContext } from "../context/CartProvider";


const ItemDetails = ({ details }) => {
  const [showFinish, setShowFinish] = useState(false);

  const { addItem } = useCartContext();

  const onAdd = (quantity) => {
    setShowFinish(true)
    addItem(details, quantity);
  }

  const textAlt = details ? details.textAlt : "cargando";
  return (
    <section className="model__grid">
      <div className="model__slide grid__one">
        <div className="slide__inner">
          <input className="slide__open" type="radio" id="slide__1" name="slide" aria-hidden="true" hidden=""
            defaultChecked="checked" />
          <div className="slide__item">
            <img
              src={details.imageFirstView !== undefined
                ? details.imageFirstView
                : ''}
              alt={textAlt} />
          </div>
          <input className="slide__open" type="radio" id="slide__2" name="slide" aria-hidden="true" hidden="" />
          <div className="slide__item">
            <img
              src={details.imagesCarrousel !== undefined
                ? details.imagesCarrousel[0]
                : ''}
              alt={textAlt} />
          </div>
          <input className="slide__open" type="radio" id="slide__3" name="slide" aria-hidden="true" hidden="" />
          <div className="slide__item">
            <img
              src={details.imagesCarrousel !== undefined
                ? details.imagesCarrousel[1]
                : ''}
              alt={textAlt} />
          </div>
          <label htmlFor="slide__3" className="slide__control prev control__1">{'<'}</label>
          <label htmlFor="slide__2" className="slide__control next control__1">{'>'}</label>
          <label htmlFor="slide__1" className="slide__control prev control__2">{'<'}</label>
          <label htmlFor="slide__3" className="slide__control next control__2">{'>'}</label>
          <label htmlFor="slide__2" className="slide__control prev control__3">{'<'}</label>
          <label htmlFor="slide__1" className="slide__control next control__3">{'>'}</label>
          <ol className="slide__indicador">
            <li>
              <label htmlFor="slide__1" className="slide__circulo">???</label>
            </li>
            <li>
              <label htmlFor="slide__2" className="slide__circulo">???</label>
            </li>
            <li>
              <label htmlFor="slide__3" className="slide__circulo">???</label>
            </li>
          </ol>
        </div>
      </div>
      <div className="model__info grid__two">
        <div className="model__tittle">
          <h1>
            {details
              ? details.tittle
              : "cargando"}
          </h1>
        </div>
        <div className="model__tittle">
          <p>
            {details
              ? details.price
              : "cargando"}
          </p>
        </div>
        <div className="model__cuotas">
          <p className="model__icon">credit_card</p>
          <p className="model__text">
            {details
              ? details.cuotas
              : "cargando"}
          </p>
        </div>
      </div>
      <div className="grid__three">
        <span className="model__text--details">Ver m??todos de pago</span>
      </div>
      <div className="model__filtro grid__four">
        <div>
          <label className="model__text" htmlFor="">Color</label>
          <div className="variante__color"></div>
        </div>
        <div>
          <label className="model__text" htmlFor="#">Talle</label>
          <div className="variante_talle">
            <span className="model__text btn__talle">L</span>
            <span className="model__text btn__talle">XL</span>
            <span className="model__text btn__talle">XXL</span>
          </div>
        </div>
      </div>
      <div className="model__btn__center grid__btn">
        <ItemCount initialStock={0} stock={4} onAdd={onAdd} />
        {showFinish
          ? <Link to='/cart' className="btn">Finalizar Compra</Link>
          : ""
        }
      </div>
      <div className="model__caracteristicas grid__five">
        <p className="model__text">
          {details
            ? details.description
            : "cargando"}
        </p>
        <p className="model__text--bold">Caracter??sticas</p>
        <p className="model__text">
          {details.fabric !== undefined
            ? details.fabric
            : 'cargando'}
        </p>
        <p className="model__text">
          {details.characteristics !== undefined
            ? details.characteristics[0]
            : "cargando"}
        </p>
        <p className="model__text">
          {details.characteristics !== undefined
            ? details.characteristics[1]
            : ""}
        </p>
        <p className="model__text">
          {details.characteristics !== undefined
            ? details.characteristics[2]
            : ""}
        </p>
      </div>
    </section>
  )
}



export default ItemDetails
