/* eslint-disable react/prop-types */

import '../../styles/styles.css';
import toast from "react-hot-toast";
import { usuarios } from '../../utils/variables';

function ProductItem(props){
    return(
        <article className="product-item ">
            <div>
                <a>
                    <img src={props.src} ></img>
                </a>
            </div>
           <h1 className="product__title">{props.title}</h1>
           <h2 className="product__price">S/. {props.price}</h2>
           <button onClick={props.onClickButton} className="primary-btn">Agregar al carrito</button>
        </article>
    )
}

function addProductoToUser(user,producto_id,quantity=1){
    const _products=user.productos;
    const _product_found=_products.find(x=>x.id==producto_id)
    if(_product_found){
        _product_found.quantity++
    }
    else{
        _products.push({id:producto_id,quantity:quantity})
    }
    return true
}

function ProductItems({items}){
    function handleClick(id){
        if(addProductoToUser(usuarios[0],id))
            toast.success("Producto agregado al carrito"); 
    }
    return(
        <section className="product-items">
            {items.map(item=><ProductItem key={item.id} title={item.title} price={item.price} src={item.imageUrls[0]} onClickButton={()=>handleClick(item.id)}  /> )}
        </section>
    )
}

export default ProductItems;