import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/fontawesome-free-solid'
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid'
import { faSearch } from '@fortawesome/fontawesome-free-solid'
import '../../styles/styles.css';



function Header(){
    return(
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
    )
}

export default Header;