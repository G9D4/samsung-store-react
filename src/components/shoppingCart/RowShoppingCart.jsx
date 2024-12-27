/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlus, faMinus } from '@fortawesome/fontawesome-free-solid';
import { useCart } from '../../context/CartContext';

function RowShoppingCart(props) {

  const { updateQuantity, removeFromCart } = useCart();
  const subtotal = (props.quantity * props.price).toFixed(2);

  return (
    <tr>
      <td className='td-content'>
        <img src={props.src} alt={props.title} className="img-reducido" />
      </td>
      <td className='td-content descripcion-producto'>{props.description}</td>
      <td className='td-content'>S/. {props.price}</td>
      <td className='td-content'>
        <div className="cart-quantity-controls">
          <button className="cart-icon-button" onClick={() => updateQuantity(props.id, Math.max(0, props.quantity - 1))}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span>{props.quantity}</span>
          <button className="cart-icon-button" onClick={() => updateQuantity(props.id, props.quantity + 1)}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </td>
      <td className='td-content'>S/. {subtotal}</td>
      <td className='td-content'>
        <button className="cart-icon-button trash" onClick={() => removeFromCart(props.id)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  )
};

function RowCardShoppingCart(props) {

  const { updateQuantity, removeFromCart } = useCart();
  const subtotal = (props.quantity * props.price).toFixed(2);

  return (
    <div className="rowCardShoppingCart">
      <img src={props.src} alt={props.title} className="img-reducido" />
      <div className='row-card'>
        <div className='row-info'>
          <p>{props.title}</p>
          <button className="cart-icon-button trash" onClick={() => removeFromCart(props.id)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
        <div className='row-info'>
          <div className='td-content'>
            <div className="cart-quantity-controls">
              <button className="cart-icon-button" onClick={() => updateQuantity(props.id, Math.max(0, props.quantity - 1))}>
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <span>{props.quantity}</span>
              <button className="cart-icon-button" onClick={() => updateQuantity(props.id, props.quantity + 1)}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
          <p className='td-content'>S/. {subtotal}</p>
        </div>
      </div>
    </div>
  )
};

export { RowShoppingCart, RowCardShoppingCart };