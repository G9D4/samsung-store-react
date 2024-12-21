import '../styles/styles.css';


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
              <tr>
                  <td>
                    <img  src="https://shop.samsung.com/latin/pub/media/catalog/product/cache/6cd1311462f4ff327d90cc1375d833bb/s/m/sm-s721_galaxys24fe_gray_front_thumb.png" />
                  </td>
                  <td>Color: Gray</td>

              </tr>
            </table>
          </section>
        </div>
      </main>
    )
  }
  
  export default ShoppingCart