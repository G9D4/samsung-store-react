/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/fontawesome-free-solid';
import { useCart } from '../../context/CartContext';

function RowShoppingCart(props) {

    const { updateQuantity } = useCart();
    const subtotal = (props.quantity * props.price).toFixed(2);

  return (
    <tr>
      <td>
        <img src={props.src} alt={props.title} className="img-reducido" />
      </td>
      <td className='descripcion-producto'>{props.description}</td>
      <td>S/. {props.price}</td>
      <td>
        <div className="cart-quantity-controls">
          <button className="btn" onClick={() => updateQuantity(props.id, Math.max(0, props.quantity - 1))}>
            -
          </button>
          <span>{props.quantity}</span>
          <button className="btn" onClick={() => updateQuantity(props.id, props.quantity + 1)}>
            +
          </button>
        </div>
      </td>
      <td>S/. {subtotal}</td>
      <td>
        <button className="btn remove-button">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  )
};

export default RowShoppingCart;