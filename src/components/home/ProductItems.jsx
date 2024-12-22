/* eslint-disable react/prop-types */

import '../../styles/styles.css';
import toast from "react-hot-toast";
import { usuarios } from '../../utils/variables';
import { useCart } from '../../context/CartContext';

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

function ProductItems({items}){

    const { addProduct } = useCart();

    function handleClick(id){
        if(addProduct(usuarios[0],id))
            toast.success("Producto agregado al carrito"); 
    }
    return(
        <section className="product-items">
            {items.map(item=><ProductItem key={item.id} title={item.title} price={item.price} src={item.imageUrls[0]} onClickButton={()=>handleClick(item.id)}  /> )}
        </section>
    )
}

export default ProductItems;