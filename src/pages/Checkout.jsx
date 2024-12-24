import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/fontawesome-free-solid';
import { useCart } from "../context/CartContext";
import CartItems from "../components/checkout/CartItems";
import '../styles/styles.css';
import { useCheckout } from "../context/CheckoutContext";




function Checkout() {

  const { getTotal } = useCart();
  const { wheelHandler, formatDni, formatTelefono, formatNumeroTarjeta, formatExpirationDate, formatCvc, submitHandler } = useCheckout();

  return (
    <main className="checkout">
      <form className="checkout-form" id="checkout-form" onSubmit={submitHandler}>
        <Link to="/shoppingCart">
          <FontAwesomeIcon icon={faArrowLeft} />
          Regresar al Carrito
        </Link>
        <fieldset className="checkout-form_fieldset">
          <h2 className="checkout-form_title text-color-dark">Contacto</h2>
          <input type="email" id="email" placeholder="Correo electrónico" required />
          <div>
            <input type="checkbox" id="publicidad" />
            <label htmlFor="publicidad">Enviarme novedades y ofertas por correo electrónico</label>
          </div>
        </fieldset>
        <fieldset className="checkout-form_fieldset">
          <h2 className="checkout-form_title text-color-dark">Entrega</h2>
          <div className="checkout-form_field">
            <label htmlFor="pais">País</label>
            <select name="pais" id="pais">
              <option value="peru">Perú</option>
              <option value="colombio">Colombia</option>
              <option value="chile">Chile</option>
              <option value="argentina">Argentina</option>
            </select>
          </div>
          <div className="checkout-form_double-field">
            <div className="checkout-form_half-field">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" name="nombre" id="nombre" required />
            </div>
            <div className="checkout-form_half-field">
              <label htmlFor="apellidos">Apellidos</label>
              <input type="text" name="apellidos" id="apellidos" required />
            </div>
          </div>
          <div className="checkout-form_field">
            <label htmlFor="dni">DNI</label>
            <input type="number" name="dni" id="dni" required onKeyDown={formatDni} onWheel={wheelHandler} />
          </div>
          <div className="checkout-form_field">
            <label htmlFor="direccion">Dirección</label>
            <input type="text" name="direccion" id="direccion" required />
          </div>
          <div className="checkout-form_field">
            <label htmlFor="telefono">Teléfono</label>
            <input type="tel" name="telefono" id="telefono" required onKeyDown={formatTelefono} />
          </div>

        </fieldset>
        <fieldset className="checkout-form_fieldset">
          <h2 className="checkout-form_title text-color-dark">Pago</h2>
          <div className="checkout-form_field">
            <label htmlFor="numeroTarjeta">Número de la tarjeta</label>
            <input type="number" id="numeroTarjeta" required onKeyDown={formatNumeroTarjeta} onWheel={wheelHandler} />
          </div>
          <div className="checkout-form_field">
            <label htmlFor="nombreTitular">Nombre del titular</label>
            <input type="text" id="nombreTitular" required />
          </div>
          <div className="checkout-form_double-field">
            <div className="checkout-form_half-field">
              <label htmlFor="fechaExpiracion">Fecha de expiración</label>
              <input type="text" maxLength="5" id="fechaExpiracion" required onKeyDown={formatExpirationDate} />
            </div>
            <div className="checkout-form_half-field">
              <label htmlFor="cvc">CVC</label>
              <input type="number" id="cvc" maxLength="4" required onKeyDown={formatCvc} onWheel={wheelHandler} />
            </div>
          </div>

        </fieldset>
        <button type="submit" className="primary-btn">Pagar</button>
      </form>
      <div className="checkout-detail background-color-gray">
        <aside>
          <CartItems />
          <section>
            <div className="checkout-subprice">
              <p>Subtotal</p>
              <p id="cart-subtotal">S/. {getTotal().toFixed(2)}</p>
            </div>
            <div className="checkout-subprice">
              <p>Impuestos</p>
              <p id="cart-subtotal">S/. {(getTotal()*1.18 - getTotal()).toFixed(2)}</p>
            </div>
            <div className="checkout-subprice">
              <p>Envío</p>
              <p>S/. 13.00</p>
            </div>
          </section>
          <section>
            <div className="checkout-price">
              <strong>Total</strong>
              <strong id="cart-total">S/. {(getTotal() + (getTotal()*1.18 - getTotal()) + 13).toFixed(2)}</strong>
            </div>
          </section>
        </aside>
      </div>
    </main>
  )
}

export default Checkout