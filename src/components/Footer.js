import { Link } from "react-router-dom";

const Footer = () => {
  return (<>
    <footer id="bottom" className="footer">
      <section className="footer--container">
        <div className="footer__info">
          <div className="footer__info--text">
            <Link to="#bottom"></Link>
            <h4 className="footer__info--h4">Indumentaria</h4>
            <ul className="footer__info--list">
              <li className="footer__info--items">
                <Link className="footer__info--a" to="">Remeras</Link>
              </li>
              <li className="footer__info--items">
                <Link className="footer__info--a" to="">Buzos</Link>
              </li>
              <li className="footer__info--items">
                <Link className="footer__info--a" to="">Pantalones</Link>
              </li>
              <li className="footer__info--items">
                <Link className="footer__info--a" to="">Zapatillas</Link>
              </li>
            </ul>
          </div>
          <div className="footer__mobile__info--text">
            <h4 className="footer__info--h4">Sobre Nosotres</h4>
            <ul className="footer__info--list">
              <li className="footer__info--items">
                <Link className="footer__info--a" to="">Quienes Somos</Link>
              </li>
              <li className="footer__info--items">
                <Link className="footer__info--a" to="">Términos y Condiciones</Link>
              </li>
              <li className="footer__info--items">
                <Link className="footer__info--a" to="">Políticas de Devolución y Reembolso</Link>
              </li>
            </ul>
          </div>
          <div className="footer__info--text">
            <h4 className="footer__info--h4">Surf</h4>
            <ul className="footer__info--list">
              <li className="footer__info--items">
                <Link className="footer__info--a" to="">Neoprene</Link>
              </li>
              <li className="footer__info--items">
                <Link className="footer__info--a" to="">Botas Neoprene</Link>
              </li>
              <li className="footer__info--items">
                <Link className="footer__info--a" to="#"></Link>
              </li>
              <li className="footer__info--items">
                <Link className="footer__info--a" to="">Fundas para tablas de Surf</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__social--mobile">
          <a href="https://www.instagram.com/">
            <div className="footer__social__circle--insta">
              <i className="fa-brands fa-instagram"></i>
            </div>
          </a>
          <a href="https://twitter.com/">
            <div className="footer__social__circle--twitter">
              <i className="fa-brands fa-twitter"></i>
            </div>
          </a>
          <Link to="#">
            <div className="footer__social__circle--email">
              <i className="fa-solid fa-envelope"></i>
            </div>
          </Link>
        </div>
        <div className="footer__copyright">
          <p>© 2022 WAVE | Todos los derechos reservados | Desarrollo Web:
            <a href="https://www.linkedin.com/in/patricio-silverii">Patricio Silverii</a>
          </p>
        </div>
      </section>
    </footer>
  </>
  )
}

export default Footer