import { createContext, useContext, useState } from 'react';
import { products } from '../utils/constants';

const CartContext = createContext();

export function CartProvider({ children }) {

    let storageCart = JSON.parse(localStorage.getItem("cart")) || [];

    const addProduct = (user, productId) => {

        const itemInCart = storageCart.find(x => x.id === productId);

        if (itemInCart != undefined) {
            itemInCart.quantity++;
        } else {
            storageCart.push({ "id": productId, "quantity": 1 })
        }
        localStorage.setItem("cart", JSON.stringify(storageCart));
        console.log('carrito nuevo', JSON.parse(localStorage.getItem("cart")))
        return true;
    }

    const removeFromCart = (productId) => {

        storageCart = storageCart.filter(x => x.id !== productId);

        localStorage.setItem("cart", JSON.stringify(storageCart));
    };

    const updateQuantity = (productId, quantity) => {
        storageCart = storageCart.map(x => {
            if (x.id === productId) {
                return {...x, quantity: quantity};
            }
        });

        localStorage.setItem("cart", JSON.stringify(storageCart));
    };

    const clearCart = () => {
        localStorage.removeItem("cart");
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
                addProduct,
                removeFromCart,
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