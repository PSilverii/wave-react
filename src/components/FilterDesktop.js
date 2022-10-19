
const FilterDesktop = () => {
  return (
    <div className="filtro__desktop">
      <h3>EN CONSTRUCCION</h3>
      <h3>Filtrar por</h3>
      <div className="filtro__desktop--container">
        <div className="filtro__type">Color</div>
        <label className="filtro__checkbox">
          <input className="checkbox__none" type="checkbox" />
          <div className="filtro__checkbox__item">
            <div className="filtro__color">Negro</div>
            <div className="filtro__circulo circulo__background--negro"></div>
          </div>
        </label>
        <label className="filtro__checkbox">
          <input className="checkbox__none" type="checkbox" />
          <div className="filtro__checkbox__item">
            <div className="filtro__color">Violeta</div>
            <div className="filtro__circulo circulo__background--violeta"></div>
          </div>
        </label>
        <label className="filtro__checkbox">
          <input className="checkbox__none" type="checkbox" />
          <div className="filtro__checkbox__item">
            <div className="filtro__color">Verde</div>
            <div className="filtro__circulo circulo__background--verde"></div>
          </div>
        </label>
        <label className="filtro__checkbox">
          <input className="checkbox__none" type="checkbox" />
          <div className="filtro__checkbox__item">
            <div className="filtro__color">Rojo</div>
            <div className="filtro__circulo circulo__background--rojo"></div>
          </div>
        </label>
        <label className="filtro__checkbox">
          <input className="checkbox__none" type="checkbox" />
          <div className="filtro__checkbox__item">
            <div className="filtro__color">Amarillo</div>
            <div className="filtro__circulo circulo__background--amarillo"></div>
          </div>
        </label>
        <label className="filtro__checkbox">
          <input className="checkbox__none" type="checkbox" />
          <div className="filtro__checkbox__item">
            <div className="filtro__color">Marron</div>
            <div className="filtro__circulo circulo__background--marron"></div>
          </div>
        </label>
        <label className="filtro__checkbox">
          <input className="checkbox__none" type="checkbox" />
          <div className="filtro__checkbox__item">
            <div className="filtro__color">Naranja</div>
            <div className="filtro__circulo circulo__background--naranja"></div>
          </div>
        </label>
        <label className="filtro__checkbox">
          <input className="checkbox__none" type="checkbox" />
          <div className="filtro__checkbox__item">
            <div className="filtro__color">Azul</div>
            <div className="filtro__circulo circulo__background--azul"></div>
          </div>
        </label>
        <label className="filtro__checkbox">
          <input className="checkbox__none" type="checkbox" />
          <div className="filtro__checkbox__item">
            <div className="filtro__color">Gris</div>
            <div className="filtro__circulo circulo__background--gris"></div>
          </div>
        </label>
        <label className="filtro__checkbox">
          <input className="checkbox__none" type="checkbox" />
          <div className="filtro__checkbox__item">
            <div className="filtro__color">Blanco</div>
            <div className="filtro__circulo circulo__background--blanco"></div>
          </div>
        </label>
        <label className="filtro__checkbox">
          <input className="checkbox__none" type="checkbox" />
          <div className="filtro__checkbox__item">
            <div className="filtro__color">Celeste</div>
            <div className="filtro__circulo circulo__background--celeste"></div>
          </div>
        </label>
      </div>
      <div className="filtro__desktop--container">
        <div className="filtro__type">Talle</div>
        <label className="filtro__checkbox">
          <input className="checkbox__none" type="checkbox" />
          <div>
            <div>XXXL</div>
          </div>
        </label>
        <label className="filtro__checkbox">
          <input className="checkbox__none" type="checkbox" />
          <div>
            <div>XXL</div>
          </div>
        </label>
        <label className="filtro__checkbox">
          <input className="checkbox__none" type="checkbox" />
          <div>
            <div>XL</div>
          </div>
        </label>
        <label className="filtro__checkbox">
          <input className="checkbox__none" type="checkbox" />
          <div>
            <div>L</div>
          </div>
        </label>
        <label className="filtro__checkbox">
          <input className="checkbox__none" type="checkbox" />
          <div>
            <div>M</div>
          </div>
        </label>
        <label className="filtro__checkbox">
          <input className="checkbox__none" type="checkbox" />
          <div>
            <div>S</div>
          </div>
        </label>
      </div>
    </div>
  )
}

export default FilterDesktop