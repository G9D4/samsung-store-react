/* eslint-disable react/prop-types */
import { useState } from 'react';
import '../styles/styles.css';
import { products } from '../utils/constants';
import { useCart} from '../context/CartContext';
import { Trash2, Plus, Minus } from 'lucide-react';


function RowShoppingCart({id, src, description, price, quantity, updateQuantity}) {
  //const [currentQuantity, setCurrentQuantity] = useState(quantity);
  const subtotal = (quantity * price).toFixed(2);
  
  return (
    <tr>
      <td>
        <img src={src} alt={description} className="img-reducido"/>
      </td>
      <td className='descripcion-producto'>{description}</td>
      <td>S/. {price}</td>
      <td>
        <div className="cart-quantity-controls">
            <button
              className="btn"
              onClick={() => updateQuantity(id, Math.max(0, quantity - 1))}
            >
              <Minus size={16} />
            </button>
            <span>{quantity}</span>
            <button
              className="btn"
              onClick={() => updateQuantity(id, quantity + 1)}
            >
              <Plus size={16} />
            </button>
          </div>
          
          <button
            className="btn remove-button"
            //onClick={() => removeFromCart(id)}
          >
            <Trash2 size={16} />
          </button> 
        {/* <input 
          defaultValue={quantity} 
          type="number" 
          name= {`cantidad${id}`} 
          id={`cantidad${id}`}
          min="0" 
          onChange={handleQuantityChange}/>  */}
      </td>
      <td>S/. {subtotal}</td>
    </tr>
  )
}

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
      <button className="terciary-btn">Aplicar Código de descuento</button>
      <a href="../checkout/checkout.html">
        <button className="primary-btn">Finalizar pedido</button>
      </a>
    </>
  );
}

function ShoppingCart() {

  const storageCart = useCart().storageCart || [];

  const [cart, setCart] = useState(
    storageCart.map((item) => ({
      ...item,
      quantity: item.quantity,
    }))
  );

  if (storageCart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Aun no has agregado productos.</h2>
      </div>
    );
  }

  const updateQuantity = (id, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id===id? { ...item, quantity: newQuantity} : item
      )
    );
  };

  const getTotal = () =>
    cart.reduce((sum,item) => {
      const product = products.find((p) => p.id === item.id);
      return sum + item.quantity * product.price
    }, 0);

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
                  const product = products.find((p) => p.id === item.id);           

                  return (
                    <RowShoppingCart
                      key={item.id}
                      id={item.id}
                      src={product.imageUrls[0]}
                      description={product.description}
                      price={product.price}
                      quantity={item.quantity}
                      updateQuantity={updateQuantity}
                    />
                  );
                })}
              </tbody>
            </table>
            </section>
            <aside className="cart-detail flex-column">
              <ContainerTotal total={getTotal()}/>
            </aside>
          </div>
      </main>
    )
  }
  
  export default ShoppingCart;