import { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/styles.css';

function Login() {
    const [inputs, setInputs] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
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
                            <input className="inputText" type="email" name="email" value={inputs.email || ""}  onChange={handleChange} id="email" required />

                            <label htmlFor="password">
                                Contraseña
                                <span className="asterisk">*</span>
                            </label>
                            <input className="inputText" type="password" name="password" value={inputs.password || ""}  onChange={handleChange} id="password" required />

                            <a className="forgot-password text-color-skyblue" href="/usuario/reset-password" >Olvidé mi contraseña</a>
                            <br />
                        </fieldset>
                        <button type="submit" className="primary-btn btn-responsive">
                            <span>Iniciar sesion</span>
                        </button>
                        <br />
                        <br />
                        <span className="asterisk">*Campos obligatorios</span>
                    </form>
                </article>
            </section>
            <section className="container">
                <article>
                    <h2>Nuevos clientes</h2>
                    <p>Crear una cuenta tiene muchos beneficios: Pago más rápido, guardar más de una dirección,
                        seguimiento de pedidos y mucho más.</p>
                    <Link className="main-header__item-icon" to="/register">
                        <button className="primary-btn btn-responsive" >
                            <span>Crear una cuenta</span>
                        </button>
                    </Link>
                </article>
            </section>
        </main>
    )
}

export default Login