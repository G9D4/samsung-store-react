/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import RowShoppingCart from '../components/shoppingCart/RowShoppingCart';
import { products } from '../utils/constants';
import { useCart } from '../context/CartContext';
import '../styles/styles.css';
import { useEffect } from "react";



function ContainerTotal({ total }) {

  return (
    <>
      <h2>Resumen:</h2>
      <p>Subtotal:</p>
      <p>S/. {total.toFixed(2)}</p>
      <p>Impuestos:</p>
      <p>S/. {(total * 0.18).toFixed(2)}</p>
      <h3>Total incluyendo impuestos: S/. {(total * 1.18).toFixed(2)}</h3>
      <h3>Total sin incluir impuestos: S/. {total.toFixed(2)}</h3>
      <p>Total: S/. {(total * 1.18).toFixed(2)}</p>
      <Link to="/checkout">
        <button className="primary-btn">Finalizar pedido</button> 
      </Link>
    </>
  );
}

function ShoppingCart() {

  const { storageCart, cart, getTotal, clearCart, updateCart } = useCart();

  if (storageCart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Aun no has agregado productos</h2>
      </div>
    );
  }

  return (
    <main className="main-content-carrito">
      <h1 className="page-title-carrito">Carrito</h1>
      <div className="content-wrapper">
        <section className="flex-row">
          <table className="table-desktop">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                let productInfo = products.filter(p => p.id == item.id)[0];

                return (
                  <RowShoppingCart
                    key={item.id}
                    id={item.id}
                    src={productInfo.imageUrls[0]}
                    title={productInfo.title}
                    description={productInfo.description}
                    price={productInfo.price}
                    quantity={item.quantity}
                  />
                );
              })}
            </tbody>
          </table>
          <div>
            <button className="terciary-btn btn-fit-content" onClick={clearCart}>Vaciar carrito</button> 
            <button onClick={() => updateCart()}>sdfsdfsdf</button>
          </div>
        </section>
        <aside className="cart-detail flex-column">
          <ContainerTotal total={getTotal()} />
        </aside>
      </div>
    </main>
  )
}

export default ShoppingCart;