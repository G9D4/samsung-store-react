/* eslint-disable react/prop-types */
import '../styles/styles.css';
import { usuarios } from '../utils/variables';
import { products } from '../utils/constants';
import { useCart } from '../context/CartContext';


function RowShoppingCart({id, src, description, price, quantity}) {
  return (
    <tr>
      <td>
        <img src={src} alt={description} className="img-reducido"/>
      </td>
      <td className='descripcion-producto'>{description}</td>
      <td>US$ {price}</td>
      <td>
        <input defaultValue={quantity} type="number" name= {`cantidad${id}`} id={`cantidad${id}`} />
      </td>
      <td></td>
    </tr>
  )
}

function ContainerTotal({total}) {
  console.log("total", total)
  return (
    <>
     <h2>Resumen:</h2>
     <p>Subtotal:</p>
     <p>US$ ${total}</p>
     <p>Impuestos:</p>
     <p>US$ ${(total * 0.18).toFixed(2)}</p>
     <h3>Total incluyendo impuestos: US$ ${(total * 1.18).toFixed(2)}</h3>
     <h3>Total sin incluir impuetos US$ ${total.toFixed(2)}</h3>
     <p>Total: S/. ${(total * 1.18).toFixed(2)}</p>
     <button className="terciary-btn">Aplicar Código de descuento</button>
     <a href="../checkout/checkouy.html">
        <button className="primary-btn">Finalizar pedido</button>
     </a>
    </>
  )
}

function ShoppingCart() {
  const storageCart = useCart();
  const { getTotal } = useCart();
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
                {storageCart && storageCart.storageCart.map((item) => {
                  const product = products.find(p => p.id === item.id);
                  return (
                    <RowShoppingCart
                      key={item.id}
                      id={item.id}
                      src={product.imageUrls[0]}
                      description={product.description}
                      price={product.price}
                      quantity={item.quantity}
                    />
                  )
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
  export default ShoppingCart