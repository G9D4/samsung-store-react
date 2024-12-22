import { useState } from "react";
import '../styles/styles.css';

function Register() {
    const [inputs, setInputs] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('inputs',inputs)
      }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

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
                        <input className="inputText" type="text" name="nombres" id="nombres" value={inputs.nombres || ""} onChange={handleChange} required />
                        
                        <label htmlFor="apellidos">
                            Apellidos
                            <span className="asterisk">*</span>
                        </label>
                        <input className="inputText" type="text" name="apellidos" id="apellidos" value={inputs.apellidos || ""} onChange={handleChange} required />
                        
                        <label htmlFor="telefono">
                            Teléfono
                            <span className="asterisk">*</span>
                        </label>
                        <input className="inputText" type="tel" name="telefono" id="telefono" value={inputs.telefono || ""} onChange={handleChange} required />
                        <br />

                        <h2>Información de inicio de sesión</h2>
                        <label htmlFor="correo">
                            Correo electrónico
                            <span className="asterisk">*</span>
                        </label>
                        <input className="inputText" type="email" name="correo" id="correo" value={inputs.correo || ""} onChange={handleChange} required />
                        
                        <label htmlFor="password">
                            Contraseña
                            <span className="asterisk">*</span>
                        </label>
                        <input className="inputText" type="password" name="password" id="password" value={inputs.password || ""} onChange={handleChange} required autoComplete="new-password" />

                        <label htmlFor="password_confirm">
                            Confirmar contraseña
                            <span className="asterisk">*</span>
                        </label>
                        <input className="inputText" type="password" name="password_confirm" id="password_confirm" value={inputs.passwordConfirm || ""} onChange={handleChange} required autoComplete="new-password" />
                        <br />
                    </fieldset>
                    <button className="primary-btn btn-responsive" type="submit">Crear Cuenta</button>
                    <br />
                    <span className="asterisk">*Campos obligatorios</span>
                </form>
            </article>
        </section>
    </main>
    )
  }
  
  export default Register;