/* eslint-disable react/prop-types */
import '../styles/styles.css';
import { usuarios } from '../utils/variables';
import { products } from '../utils/constants';

function RowShoppingCart(props){
  return (
    <tr>
      <td>
        <img  src={props.src} />
      </td>
      <td>{props.description}</td>
      <td>US$ {props.price}</td>
      <td>{props.quantity}</td>
      <td>US$ 0.00</td>
    </tr>
  )
}

function ShoppingCart() {
    return (
      <main className="main-content-carrito">
        <h1 className="page-title-carrito">Carrito</h1>
        <div className="content-wrapper">
          <section className="flex-row">
            <table className="table-desktop">
              <tr>
                  <th>Articulo</th>
                  <th>Descripción</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Subtotal</th>
                  <th></th>
              </tr>
              {usuarios[0].productos.map(producto=>{
                const _product=products.find(x=>x.id==producto.id);
               return <RowShoppingCart key={_product.id} src={_product.imageUrls[0]} description={_product.description} price={_product.price} quantity={producto.quantity} />
                })}
              
            </table>
          </section>
        </div>
      </main>
    )
  }
  
  export default ShoppingCart