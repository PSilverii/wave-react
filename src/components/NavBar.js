import CartWidgetMobileTablet from "./CartWidgetMobileTablet";
import CartWidgetDesktop from "./CartWidgetDesktop";
import { NavLink } from "react-router-dom";


const NavBar = () => {
  return (<>
    <header>
      <nav>
        <ul className="header__account">
          <li className="header__account--align">
            <NavLink className="header__account--btn" to='#'>Crear Cuenta</NavLink>
          </li>
          <li className="header__account--align">
            <NavLink className="header__account--btn" to='#'>Iniciar Sesión</NavLink>
          </li>
        </ul>
        <section className="nav__mobile">
          <label htmlFor="check__mobile">
            <p className="nav__btn__mobile--icon">menu</p>
          </label>
          <input type="checkbox" id="check__mobile" />
          <ul className="nav__menu__mobile">
            <li>
              <NavLink className="active" to='/'>Inicio</NavLink>
            </li>
            <li>
              <NavLink to='/category/pantalones'>Pantalones</NavLink>
            </li>
            <li>
              <NavLink to='/category/remeras'>Remeras</NavLink>
            </li>
          </ul>
          <div className="nav__btn__mobile">
            <label htmlFor="check__search__mobile">
              <p className="nav__btn__mobile--icon no__margin">search</p>
            </label>
            <input type="checkbox" id="check__search__mobile" />
            <ul className="nav__btn__search__mobile">
              <li>
                <input className="nav__btn__search__mobile--input" type="text" placeholder="Buscar" />
              </li>
            </ul>
            <CartWidgetMobileTablet />
          </div>
        </section>
        <section className="nav__desktop">
          <picture className="nav__desktop--logo">
            <img src="https://i.imgur.com/DtfFMXe.png" alt="logo" />
          </picture>
          <ul className="nav__desktop__btn">
            <li className="nav__desktop__btn--align">
              <NavLink className="nav__desktop__btn--text" to='/'>Home</NavLink>
            </li>
            <li className="nav__desktop__btn--text nav__desktop__btn--align">
              <label className="nav__desktop__btn--pointer" htmlFor="check__desktop">Tienda Online</label>
              <input type="checkbox" id="check__desktop" />
              <ul className="nav__desktop__menu">
                <li>
                  <NavLink className="nav__desktop__menu--text" to='/category/pantalones'>Pantalones</NavLink>
                </li>
                <li>
                  <NavLink className="nav__desktop__menu--text" to='/category/remeras'>Remeras</NavLink>
                </li>
              </ul>
            </li>
            <li className="nav__desktop__btn--align"><NavLink className="nav__desktop__btn--text" to='/contact'>Contactanos</NavLink></li>
          </ul>
          <div className="nav__btn__desktop">
            <label htmlFor="check__search__desktop">
              <p className="nav__btn__desktop--icon no__margin">search</p>
            </label>
            <input type="checkbox" id="check__search__desktop" />
            <ul className="nav__btn__search__desktop">
              <li>
                <input className="nav__btn__search__desktop--input" type="text" placeholder="Buscar" />
              </li>
            </ul>
            <CartWidgetDesktop />
          </div>
        </section>
      </nav>
    </header>
  </>
  )
}

export default NavBar