import { useState } from "react";
import { Link } from "react-router-dom";
import { usuarios } from '../utils/variables';
import { useNavigate } from "react-router-dom";
import '../styles/styles.css';

function Login() {
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

    const validatePassword = (password) => {
        if (!password) {
            return "Por favor ingrese una contraseña";
        }
        if (password.length < 8) {
            return "La contraseña debe tener al menos 8 caracteres";
        }
        if (!/^[A-Za-z0-9_@./#$&+-@*]*$/.test(password)) {
            return "La contraseña solo puede contener letras, números y caracteres especiales";
        }
        return "";
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const emailError = validateEmail(inputs.email);
        const passwordError = validatePassword(inputs.password);

        if (emailError) {
            setErrors({ email: emailError, password: passwordError });
            return;
        }

        const usuarioEncontrado = usuarios.find(
            (usuario) => usuario.email.toLowerCase() === inputs.email.toLowerCase()
        );

        if (!usuarioEncontrado) {
            setErrors({ email: "El usuario no existe", password: passwordError });
        } else {
            if (usuarioEncontrado.contrasenia === inputs.password) {
                navigate('/');
            } else {
                setErrors({ email: emailError, password: "La contraseña no coincide con el usuario" });
            }
        }
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    return (
        <main className="login">
            <section className="container">
                <h1 id="page-title">Inicio de sesión de cliente</h1>
                <article>
                    <h2>Clientes registrados</h2>
                    <p>Si tienes una cuenta, inicia sesión con tu dirección de correo electrónico.</p>
                    <form onSubmit={handleSubmit}>
                        <fieldset className="datos">
                            <label htmlFor="email">
                                Correo electrónico
                                <span className="asterisk">*</span>
                            </label>
                            <input
                                className={`inputText ${errors.email ? "invalid" : ""}`}
                                type="email"
                                name="email"
                                value={inputs.email || ""}
                                onChange={handleChange}
                                id="email"
                            />
                            {errors.email && <p className="error-message">{errors.email}</p>}

                            <label htmlFor="password">
                                Contraseña
                                <span className="asterisk">*</span>
                            </label>
                            <input
                                className={`inputText ${errors.password ? "invalid" : ""}`}
                                type="password"
                                name="password"
                                value={inputs.password || ""}
                                onChange={handleChange}
                                id="password"
                            />
                            {errors.password && <p className="error-message">{errors.password}</p>}

                            <a className="forgot-password text-color-skyblue" href="/usuario/reset-password">
                                Olvidé mi contraseña
                            </a>
                            <p><span className="asterisk">*Campos obligatorios</span></p>
                        </fieldset>
                        <button type="submit" className="primary-btn btn-responsive">
                            <span>Iniciar sesión</span>
                        </button>
                    </form>
                </article>
            </section>
            <section className="container">
                <article>
                    <h2>Nuevos clientes</h2>
                    <p>Crear una cuenta tiene muchos beneficios: Pago más rápido, guardar más de una dirección,
                        seguimiento de pedidos y mucho más.</p>
                    <Link className="main-header__item-icon" to="/register">
                        <button className="primary-btn btn-responsive">
                            <span>Crear una cuenta</span>
                        </button>
                    </Link>
                </article>
            </section>
        </main>
    );
}

export default Login;
