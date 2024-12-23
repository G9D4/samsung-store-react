/* eslint-disable react/prop-types */

import '../../styles/styles.css';
import { products } from '../../utils/constants';
import { useCart } from '../../context/CartContext';

function CartItem(props) {
    return (
        <article className="checkout-detail_product">
            <div className="checkout-detail_product_image">
                <img src={props.src} alt={props.name} />
                <span>{props.quantity}</span>
            </div>
            <p>{props.name}</p>
            <p>S/. {props.price.toFixed(2)}</p>
        </article>
    )
}

function CartItems() {

    const { storageCart } = useCart();

    return (
        <section id="cart-items-section">
            {storageCart.map(item => {
                let productInfo = products.filter(p => p.id == item.id)[0];
                return <CartItem
                    key={item.id}
                    src={productInfo.imageUrls[0]}
                    name={productInfo.title}
                    quantity={item.quantity}
                    price={productInfo.price} />
                }
            )}
        </section>
    )
}

export default CartItems;