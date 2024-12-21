import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/fontawesome-free-solid'
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid'
import { faSearch } from '@fortawesome/fontawesome-free-solid'
import '../../styles/styles.css';



function Header(){
    return(
        <header>
            <div className="main-header__carousel">
                <div className="main-header__slider">
                    <div className="main-header__item-slider">Compara hasta en 36 cuotas a 0% de interés con BAC</div>
                    <div className="main-header__item-slider">Descubre los nuevos Galaxy Fold6 | Z Flip6</div>
                    <div className="main-header__item-slider">Compra ahora con ENVÍO GRATIS entre 24 y 72h</div>
                    <div className="main-header__item-slider">Proyecto grupo 4</div>
                </div>
            </div>
            <nav className="main-header__nav">
                <ul className="main-header__item-list">
                    <Link to="/">
                        <img className="main-header_logo" src="https://static.vecteezy.com/system/resources/thumbnails/014/018/566/small_2x/samsung-logo-on-transparent-background-free-vector.jpg"></img>
                    </Link>
                </ul>
                <ul className="main-header__item-list ">
                    <li className="main-header__item">
                        <Link className="main-header__item-icon"  to="/login">
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                    </li>
                    <li className="main-header__item">
                        <Link className="main-header__item-icon" to="/shoppingCart">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </Link>
                    </li>
                    <li className="main-header__item">
                        <Link className="main-header__item-icon" to="/">
                            <FontAwesomeIcon icon={faSearch} />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;