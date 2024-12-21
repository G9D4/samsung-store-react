/* eslint-disable react/prop-types */

import styled from "styled-components";


const StyleProductItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    margin-top: 1rem;
    /* Espaciado superior */
    gap: 1rem;
`
const StyleProductItem = styled.article`
    display: flex;
    max-width: 95%;
    border: 1px solid #e4e4e4;
    box-shadow: none;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    img {
        width: 200px;
        height: 200px;
        display: flex;
        flex-direction: column;
    }
    h1 {
        
        font-size: 1.6rem;
        text-align: center;
        color: #1f1f1f;
    }
    h2 {
        text-align: center;
        color: #2089ff;
        margin-bottom: 0.5rem;
    }
`
const StyleProductItemButton = styled.button`
  background-color: #2089FF;
    color: #FFFFFF;
    text-transform: uppercase;
    border-radius: 24px;
    border: none;
    padding: 10px 20px;
    letter-spacing: 2.4px;
    cursor: pointer;
    width: 100%;
    font-weight: bold;
    &:hover {
        background-color: #0056b3;
    }
`

function ProductItem(props){
    return(
        <StyleProductItem>
            <img src={props.src} ></img>
           <h1>{props.title}</h1>
           <h2>S/. {props.price}</h2>
           <StyleProductItemButton>Agregar al carrito</StyleProductItemButton>
        </StyleProductItem>
    )
}

function ProductItems({items}){
    return(
        <StyleProductItems>
            {items.map(item=><ProductItem key={item.id} title={item.title} price={item.price} src={item.imageUrls[0]} /> )}
        </StyleProductItems>
    )
}

export default ProductItems;