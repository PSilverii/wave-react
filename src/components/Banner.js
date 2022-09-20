import { Link } from "react-router-dom"

const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="banner__item--mobile">
          <div className="banner__item__icon">
            <div className="banner__item__icon__container">
              <p className="banner__item__icon__material-icons">credit_card</p>
            </div>
          </div>
          <div className="banner__item__text">
            <Link to="#bottom">
              <h4 className="banner__item__text--h4">HASTA 12 CUOTAS SIN INTERES</h4>
              <small className="banner__item__text--info">En todos los productos</small>
            </Link>
          </div>
        </div>
        <div className="banner__item">
          <div className="banner__item__icon">
            <div className="banner__item__icon__container">
              <p className="banner__item__icon__material-icons">sync</p>
            </div>
          </div>
          <div className="banner__item__text">
            <Link to="">
              <h4 className="banner__item__text--h4">DEVOLUCIONES GRATUITAS</h4>
              <small className="banner__item__text--info">Dentro de los primeros 30 días de recibir el
                producto</small>
            </Link>
          </div>
        </div>
        <div className="banner__item--tablet">
          <div className="banner__item__icon">
            <div className="banner__item__icon__container">
              <p className="banner__item__icon__material-icons">local_shipping</p>
            </div>
          </div>
          <div className="banner__item__text">
            <Link to="#bottom">
              <h4 className="banner__item__text--h4">ENVIOS GRATIS Link TODO EL PAIS</h4>
              <small className="banner__item__text--info">Si tu compra supera los $12.000</small>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner