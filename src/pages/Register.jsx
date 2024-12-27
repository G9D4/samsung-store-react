import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/styles.css';

function Register() {
    const [inputs, setInputs] = useState({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateEmail = (email) => {
        if (!email) {
            return "Por favor ingrese un email";
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return "Por favor ingrese un email válido";
        }
        return "";
    };

    const validatePassword = (password, passwordConfirm) => {
        if (!password) {
            return "Por favor ingrese una contraseña";
        }
        if (password.length < 8) {
            return "La contraseña debe tener al menos 8 caracteres";
        }
        if (!/^[A-Za-z0-9_@./#$&+-@*]*$/.test(password)) {
            return "La contraseña solo puede contener letras, números y caracteres especiales";
        }
        if (password !== passwordConfirm) {
            return "Las contraseñas no coinciden";
        }
        return "";
    };

    const validatePhone = (phone) => {
        if (!phone) {
            return "Por favor ingrese su número de teléfono";
        }
        if (!/^\d{9}$/.test(phone)) {
            return "El teléfono debe contener exactamente 9 dígitos";
        }
        return "";
    };

    const validateInputs = () => {
        const errors = {};

        if (!inputs.nombres) {
            errors.nombres = "Por favor ingrese su nombre";
        }
        if (!inputs.apellidos) {
            errors.apellidos = "Por favor ingrese su apellido";
        }
        const phoneError = validatePhone(inputs.telefono);
        if (phoneError) {
            errors.telefono = phoneError;
        }
        const emailError = validateEmail(inputs.correo);
        if (emailError) {
            errors.correo = emailError;
        }
        const passwordError = validatePassword(inputs.password, inputs.passwordConfirm);
        if (passwordError) {
            errors.password = passwordError;
        }

        return errors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validateInputs();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Guardar datos en localStorage
        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        const nuevoUsuario = {
            id: `_dynamic_${Date.now()}`, // Generar un ID único para los usuarios dinámicos
            nombres: inputs.nombres,
            apellidos: inputs.apellidos,
            telefono: inputs.telefono,
            email: inputs.correo,
            contrasenia: inputs.password,
            productos: [] 
        };
        usuarios.push(nuevoUsuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
          
        console.log(usuarios);

        console.log("Datos registrados:", inputs);
        navigate('/login'); // Redirigir al login
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    return (
        <main className="registro">
            <section className="container">
                <h1 id="page-title">Registro de cliente</h1>
                <article>
                    <h2>Información personal</h2>
                    <form onSubmit={handleSubmit}>
                        <fieldset className="datos">
                            <label htmlFor="nombres">
                                Nombres
                                <span className="asterisk">*</span>
                            </label>
                            <input
                                className={`inputText ${errors.nombres ? "invalid" : ""}`}
                                type="text"
                                name="nombres"
                                id="nombres"
                                value={inputs.nombres || ""}
                                onChange={handleChange}
                                required
                            />
                            {errors.nombres && <p className="error-message">{errors.nombres}</p>}

                            <label htmlFor="apellidos">
                                Apellidos
                                <span className="asterisk">*</span>
                            </label>
                            <input
                                className={`inputText ${errors.apellidos ? "invalid" : ""}`}
                                type="text"
                                name="apellidos"
                                id="apellidos"
                                value={inputs.apellidos || ""}
                                onChange={handleChange}
                                required
                            />
                            {errors.apellidos && <p className="error-message">{errors.apellidos}</p>}

                            <label htmlFor="telefono">
                                Teléfono
                                <span className="asterisk">*</span>
                            </label>
                            <input
                                className={`inputText ${errors.telefono ? "invalid" : ""}`}
                                type="tel"
                                name="telefono"
                                id="telefono"
                                value={inputs.telefono || ""}
                                onChange={handleChange}
                                required
                            />
                            {errors.telefono && <p className="error-message">{errors.telefono}</p>}

                            <h2>Información de inicio de sesión</h2>
                            <label htmlFor="correo">
                                Correo electrónico
                                <span className="asterisk">*</span>
                            </label>
                            <input
                                className={`inputText ${errors.correo ? "invalid" : ""}`}
                                type="email"
                                name="correo"
                                id="correo"
                                value={inputs.correo || ""}
                                onChange={handleChange}
                                required
                            />
                            {errors.correo && <p className="error-message">{errors.correo}</p>}

                            <label htmlFor="password">
                                Contraseña
                                <span className="asterisk">*</span>
                            </label>
                            <input
                                className={`inputText ${errors.password ? "invalid" : ""}`}
                                type="password"
                                name="password"
                                id="password"
                                value={inputs.password || ""}
                                onChange={handleChange}
                                required
                                autoComplete="new-password"
                            />
                            {errors.password && <p className="error-message">{errors.password}</p>}

                            <label htmlFor="password_confirm">
                                Confirmar contraseña
                                <span className="asterisk">*</span>
                            </label>
                            <input
                                className={`inputText ${errors.password ? "invalid" : ""}`}
                                type="password"
                                name="passwordConfirm"
                                id="password_confirm"
                                value={inputs.passwordConfirm || ""}
                                onChange={handleChange}
                                required
                                autoComplete="new-password"
                            />
                            <br />
                        </fieldset>
                        <button className="primary-btn btn-responsive" type="submit">
                            Crear Cuenta
                        </button>
                        <br />
                        <span className="asterisk">*Campos obligatorios</span>
                    </form>
                </article>
            </section>
        </main>
    );
}

export default Register;
