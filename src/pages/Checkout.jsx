import styled from "styled-components";

const StyleCheckout = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 15px;
    box-sizing: border-box;
    h1{
      margin: 40px 0 20px;
      padding: 0 15px;
      text-align: left;
      text-align:center;
    }
`
const StyleCheckoutTable = styled.table`
`

function Checkout() {
    return (
      <StyleCheckout>
        <h1>Carrito</h1>
        <StyleCheckoutTable>
          <tr>
              <th>Articulo</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th></th>
          </tr>
        </StyleCheckoutTable>
      </StyleCheckout>
    )
  }
  
  export default Checkout