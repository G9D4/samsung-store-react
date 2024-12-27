/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { products } from '../utils/constants';

const CartContext = createContext();

export function CartProvider({ children }) {

    const navigate = useNavigate();
    let storageCart = JSON.parse(localStorage.getItem("cart")) || [];
    const [cart, setCart] = useState(storageCart);

    const addProduct = (user, productId) => {

        const itemInCart = storageCart.find(x => x.id === productId);

        if (itemInCart != undefined) {
            itemInCart.quantity++;
        } else {
            storageCart.push({ "id": productId, "quantity": 1 })
        }
        localStorage.setItem("cart", JSON.stringify(storageCart));
        setCart(storageCart)
        console.log('carrito nuevo', JSON.parse(localStorage.getItem("cart")))
        return true;
    }

    const removeFromCart = (productId) => {

        storageCart = storageCart.filter(x => x.id !== productId);

        localStorage.setItem("cart", JSON.stringify(storageCart));
    };

    const updateQuantity = (productId, quantity) => {
        
        setCart(current =>
            current.map(item =>
                item.id === productId ? { ...item, quantity: quantity } : item
            )
        );


    };


    const updateCart = () => {
        console.log(cart);
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    const clearCart = () => {
        localStorage.removeItem("cart");
        navigate('/shoppingCart')
    };

    const getTotal = () => {
        let total = 0;

        storageCart.forEach((item) => {
            const product = products.find(p => p.id === item.id);
            const subtotal = product.price * item.quantity;
            total += subtotal;
        })

        return total;
    };

    return (
        <CartContext.Provider
            value={{
                storageCart,
                cart,
                setCart,
                addProduct,
                removeFromCart,
                updateCart,
                updateQuantity,
                clearCart,
                getTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};