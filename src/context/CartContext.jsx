/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
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
        return true;
    }

    const removeFromCart = (productId) => {

        setCart(current =>
            current.filter(item => item.id != productId)
        );

    };

    const updateQuantity = (productId, quantity) => {

        if (quantity == 0) {

            setCart(current =>
                current.filter(item => item.id != productId)
            );
        } else {
            setCart(current =>
                current.map(item =>
                    item.id === productId ? { ...item, quantity: quantity } : item
                )
            );
        }
    };

    const updateCart = () => {
        localStorage.setItem("cart", JSON.stringify(cart));
        toast.success("Carrito actualizado"); 
    }

    const clearCart = () => {
        localStorage.removeItem("cart");
        navigate('/shoppingCart')
    };

    const getTotal = () => {
        let total = 0;

        cart.forEach((item) => {
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