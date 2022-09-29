import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getProducts } from "../app/api/firebaseApi";

const FeaturedProducts = () => {
  const [infoFeatured, setInfoFeatured] = useState();
  
  useEffect(() => {
    getProducts().then(res => setInfoFeatured(res.filter(producto => producto.featured === true)))
    
  }, [])

  return (
    <>
    
      <section className="destacados__index">
        <div className="product__tittle">
          <h1>Productos Destacados</h1>
        </div>
        <div className="product__img grid__one">
          <Link to={infoFeatured ? `/details/${infoFeatured[0].id}` : `#`}>
            <img src={infoFeatured ? infoFeatured[0].imageFirstView : "cargando"} alt={infoFeatured ? infoFeatured[0].textAlt : "cargando"} />
          </Link>
        </div>
        <div className="product__text grid__two">
          <Link to={infoFeatured ? `/details/${infoFeatured[0].id}` : `#`}>
            <p className="product__text--p">{infoFeatured ? infoFeatured[0].tittle : "cargando"} | 2022</p>
          </Link>
        </div>
        <div className="product__img grid__three">
          <Link to={infoFeatured ? `/details/${infoFeatured[1].id}` : `#`}>
            <img src={infoFeatured ? infoFeatured[1].imageFirstView : "cargando"} alt={infoFeatured ? infoFeatured[1].textAlt : "cargando"} />
          </Link>
        </div>
        <div className="product__text grid__four">
          <Link to={infoFeatured ? `/details/${infoFeatured[1].id}` : `#`}>
            <p className="product__text--p">{infoFeatured ? infoFeatured[1].tittle : "cargando"} | 2022</p>
          </Link>
        </div>
        <div className="product__img grid__five">
          <Link to={infoFeatured ? `/details/${infoFeatured[2].id}` : `#`}>
            <img src={infoFeatured ? infoFeatured[2].imageFirstView : "cargando"} alt={infoFeatured ? infoFeatured[2].textAlt : "cargando"} />
          </Link>
        </div>
        <div className="product__text grid__six">
          <Link to="#">
            <p className="product__text--p">{infoFeatured ? infoFeatured[2].tittle : "cargando"} | 2022</p>
          </Link>
        </div>
        <div className="product__img grid__seven">
          <Link to={infoFeatured ? `/details/${infoFeatured[3].id}` : `#`}>
            <img src={infoFeatured ? infoFeatured[3].imageFirstView : "cargando"} alt={infoFeatured ? infoFeatured[3].textAlt : "cargando"} />
          </Link>
        </div>
        <div className="product__text grid__eight">
          <Link to="#">
            <p className="product__text--p">{infoFeatured ? infoFeatured[3].tittle : "cargando"} | 2022</p>
          </Link>
        </div>
      </section>
    </>
  )
}

export default FeaturedProducts