/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const CheckoutContext = createContext();

export function CheckoutProvider({ children }) {

    const navigate = useNavigate();

    const wheelHandler = () => {
        document.activeElement.blur();
    };
    
    const formatDni = (e) => {
        
        const inputDni = document.getElementById('dni');
        let value = e.target.value;
        const notAllowedKeyArray = [38, 40, 69];

        !notAllowedKeyArray.includes(e.keyCode) ? inputDni.value = value.substr(0, 7) : e.preventDefault();
    }

    const formatTelefono = (e) => {

        const inputTelefono = document.getElementById('telefono');
        let value = e.target.value;
        const eKey = 69;
        const allowedKeyArray = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 8];

        if (e.keyCode != eKey && allowedKeyArray.includes(e.keyCode)) {
            inputTelefono.value = value.substr(0, 8);
        } else {
            e.preventDefault();
        }
    }

    const formatNumeroTarjeta = (e) => {

        const inputNumeroTarjeta = document.getElementById('numeroTarjeta');
        let value = e.target.value;
        const eKey = 69;

        if (e.keyCode != eKey) {
            inputNumeroTarjeta.value = value.substr(0, 18);
        } else {
            e.preventDefault();
        }
    }

    const formatExpirationDate = (e) => {

        const inputFechaExpiracion = document.getElementById('fechaExpiracion');
        let value = e.target.value;

        const allowedKeyArray = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 8];

        const isAllowedKey = allowedKeyArray.includes(e.keyCode)

        if (isAllowedKey) {
            if (value.length > 1 && e.keyCode != 8) {
                if (value.includes('/')) {
                    value = value.replace('/', "");
                }
                inputFechaExpiracion.value = value.substr(0, 2) + "/" + value.substr(2);
            }
        } else {
            e.preventDefault();
        }
    }

    const formatCvc = (e) => {

        const inputCvc = document.getElementById('cvc');
        let value = e.target.value;

        const eKey = 69;

        if (e.keyCode != eKey) {
            inputCvc.value = value.toString().substr(0, 3);
        } else {
            e.preventDefault();
        }
    }

    const checkExpDate = (value) => {

        if (value.length === 5) {
            const cardMonth = value.substr(0, 2).substr(0, 1) == 0 ? Number(value.substr(1, 1)) : Number(value.substr(0, 2));
            const cardYear = Number(20 + value.substr(3));

            let currentMonth = new Date().getMonth();
            let currentYear = new Date().getFullYear();

            if (cardYear < currentYear || (cardYear === currentYear && cardMonth < currentMonth) || cardMonth > 12) {
                return "Fecha inválida";
            } else {
                return true;
            }
        } else {
            return "La fecha de expiración debe tener el formato MM/AA"
        }
    };

    const displayError = (field, message) => {
        const form = document.getElementById('checkout-form');
        const input = form[field];
        let errorElement = input.nextElementSibling;
        if (!errorElement || !errorElement.classList.contains("error-message")) {
            errorElement = document.createElement("span");
            errorElement.classList.add("error-message");
            input.after(errorElement);
        }
        errorElement.textContent = message;
    }
    
    const clearError = (field) => {
        const form = document.getElementById('checkout-form');
        const input = form[field];
        const errorElement = input.nextElementSibling;
        if (errorElement && errorElement.classList.contains("error-message")) {
            errorElement.textContent = "";
        }
    }

    const validators = {
        email: (value) => {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regex.test(value)) {
                displayError("email", "El correo electrónico no es válido");
                return "El correo electrónico no es válido";
            }
            clearError("email");
            return "";
        },
        nombre: (value) => {
            const regex = /^[a-zA-ZÀ-ſ\s]+$/;
            if (!regex.test(value)) {
                displayError("nombre", "El nombre solo debe contener letras y espacios");
                return "El nombre solo debe contener letras y espacios";
            }
            clearError("nombre");
            return "";
        },
        apellidos: (value) => {
            const regex = /^[a-zA-ZÀ-ſ\s]+$/;
            if (!regex.test(value)) {
                displayError("apellidos", "Los apellidos solo deben contener letras y espacios");
                return "Los apellidos solo deben contener letras y espacios";
            }
            clearError("apellidos");
            return "";
        },
        dni: (value) => {
            const regex = /^\d{8}$/;
            if (!regex.test(value)) {
                displayError("dni", "El DNI debe contener exactamente 8 dígitos");
                return "El DNI debe contener exactamente 8 dígitos";
            }
            clearError("dni");
            return "";
        },
        telefono: (value) => {
            const regex = /^\d{7,9}$/;
            if (!regex.test(value)) {
                displayError("telefono", "El teléfono debe contener entre 7 a 9 dígitos");
                return "El teléfono debe contener entre 7 a 9 dígitos";
            }
            clearError("telefono");
            return "";
        },
        numeroTarjeta: (value) => {
            const regex = /^\d{16,19}$/;
            if (!regex.test(value)) {
                displayError("numeroTarjeta", "El número de tarjeta debe contener entre 16 a 19 dígitos");
                return "El número de tarjeta debe contener entre 16 a 19 dígitos";
            }
            clearError("numeroTarjeta");
            return "";
        },
        nombreTitular: (value) => {
            const regex = /^[a-zA-ZÀ-ſ\s]+$/;
            if (!regex.test(value)) {
                displayError("nombreTitular", "El nombre solo debe contener letras y espacios");
                return "El nombre solo debe contener letras y espacios";
            }
            clearError("nombreTitular");
            return "";
        },
        fechaExpiracion: (value) => {
    
            if (checkExpDate(value) != true) {
                displayError("fechaExpiracion", checkExpDate(value));
                return checkExpDate(value);
            }
            clearError("fechaExpiracion");
            return "";
        },
        cvc: (value) => {
            const regex = /^\d{3,4}$/;
            if (!regex.test(value)) {
                displayError("cvc", "El número de tarjeta debe contener entre 3 a 4 dígitos");
                return "El número de tarjeta debe contener entre 3 a 4 dígitos";
            }
            clearError("cvc");
            return "";
        },
    
    };

    const submitHandler = (e) => {
    
        e.preventDefault();

        const form = document.getElementById('checkout-form');
    
        const formValues = {
            email: form.email.value.trim().toLowerCase(),
            nombre: form.nombre.value,
            apellidos: form.apellidos.value,
            dni: form.dni.value,
            telefono: form.telefono.value,
            numeroTarjeta: form.numeroTarjeta.value,
            nombreTitular: form.nombreTitular.value,
            fechaExpiracion: form.fechaExpiracion.value,
            cvc: form.cvc.value
        };
    
        let isValid = true;
    
        Object.keys(validators).forEach((field) => {
            const error = validators[field](formValues[field], formValues);
            if (error) {
                isValid = false;
            }
        });
    
        if (isValid) {
            localStorage.removeItem("cart");
            toast.success("¡Compra registrada exitosamente!");
            navigate('/');
        }
    }

    return (
        <CheckoutContext.Provider
            value={{
                wheelHandler,
                formatDni,
                formatTelefono,
                formatNumeroTarjeta,
                formatExpirationDate,
                formatCvc,
                submitHandler,
            }}
        >
            {children}
        </CheckoutContext.Provider>
    );
};

export const useCheckout = () => {
    const context = useContext(CheckoutContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};