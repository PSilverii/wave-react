//fotos
import logoXs from "../assets/logo/logo-xs.png";
//cart
import CartWidgetMobileTablet from "./CartWidgetMobileTablet";
import CartWidgetDesktop from "./CartWidgetDesktop";


const NavBar = () => {
    return (<>
        <header>
            <nav>
                <ul className="header__account">
                    <li className="header__account--align">
                        <a className="header__account--btn" href="#">Crear Cuenta</a>
                    </li>
                    <li className="header__account--align">
                        <a className="header__account--btn" href="#">Iniciar Sesión</a>
                    </li>
                </ul>
                <section className="nav__mobile">
                    <label htmlFor="check__mobile">
                        <p className="nav__btn__mobile--icon">menu</p>
                    </label>
                    <input type="checkbox" id="check__mobile" />
                    <ul className="nav__menu__mobile">
                        <li>
                            <a className="active" href="#">Inicio</a>
                        </li>
                        <li>
                            <a href="#">Pantalones</a>
                        </li>
                        <li>
                            <a href="#">Remeras</a>
                        </li>
                        <li>
                            <a href="#">Buzos</a>
                        </li>
                        <li>
                            <a href="#">Zapatillas</a>
                        </li>
                        <li>
                            <a href="#">Neoprene</a>
                        </li>
                        <li>
                            <a href="#">Botas Neoprene</a>
                        </li>
                        <li>
                            <a href="#">Lycras</a>
                        </li>
                        <li>
                            <a href="#">Fundas para tablas de Surf</a>
                        </li>
                        <li>
                            <a href="#">Contactanos</a>
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
                        <img src={logoXs} alt="logo" />
                    </picture>
                    <ul className="nav__desktop__btn">
                        <li className="nav__desktop__btn--align">
                            <a className="nav__desktop__btn--text" href="#">Home</a>
                        </li>
                        <li className="nav__desktop__btn--text nav__desktop__btn--align">
                            <label className="nav__desktop__btn--pointer" htmlFor="check__desktop">Tienda Online</label>
                            <input type="checkbox" id="check__desktop" />
                            <ul className="nav__desktop__menu">
                                <li>
                                    <a className="nav__desktop__menu--text" href="#">Pantalones</a>
                                </li>
                                <li>
                                    <a className="nav__desktop__menu--text" href="#">Remeras</a>
                                </li>
                                <li>
                                    <a className="nav__desktop__menu--text" href="#">Buzos</a>
                                </li>
                                <li>
                                    <a className="nav__desktop__menu--text" href="#">Zapatillas</a>
                                </li>
                                <li>
                                    <a className="nav__desktop__menu--text" href="#">Neoprene</a>
                                </li>
                                <li>
                                    <a className="nav__desktop__menu--text" href="#">Botas Neoprene</a>
                                </li>
                                <li>
                                    <a className="nav__desktop__menu--text" href="#">Lycras</a>
                                </li>
                                <li>
                                    <a className="nav__desktop__menu--text" href="#">Fundas para tablas de Surf</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav__desktop__btn--align"><a className="nav__desktop__btn--text" href="#">Contactanos</a></li>
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