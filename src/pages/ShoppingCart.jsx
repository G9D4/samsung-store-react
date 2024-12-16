import styled from "styled-components";

const StyleShoppingCart = styled.div`
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
const StyleShoppingCartTable = styled.table`
`

function ShoppingCart() {
    return (
      <StyleShoppingCart>
        <h1>Carrito</h1>
        <StyleShoppingCartTable>
          <tr>
              <th>Articulo</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th></th>
          </tr>
        </StyleShoppingCartTable>
      </StyleShoppingCart>
    )
  }
  
  export default ShoppingCart