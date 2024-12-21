import { useState } from "react";
import styled from "styled-components";

const StyleRegister = styled.div`
    max-width: 530px;
    margin: auto;
    padding: 20px;
`
const StyleRegisterContainer = styled.div`
    display: grid;
    gap: 10px;
    h1{
        font-size: 24px;
        color: #222488;
        margin: 0;
    }
    fieldset{
        display: grid;
        gap: 10px;
        border: none;
        padding: 0;
        }
    .asterisk {
        color: red;
        font-size: small;
    }
    input {
        width: 100%;
        height: 32px;
        padding: 0 9px;
        font-size: 14px;
        border: 1px solid #c2c2c2;
        border-radius: 1px;
        box-sizing: border-box;
    }
`
const StyleRegisterButton = styled.button`
    background-color: #2089FF;
    color: #FFFFFF;
    text-transform: uppercase;
    border-radius: 24px;
    border: none;
    padding: 10px 20px;
    letter-spacing: 2.4px;
    cursor: pointer;
    width: 100%;
    font-weight: bold;
    
    &:hover{
        background-color: #0056b3;
    }

`
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
      <StyleRegister>
        <StyleRegisterContainer>
            <h1>Registro</h1> 
            <article>
                <p>Si tienes una cuenta, inicia sesión con tu dirección de correo electrónico.</p>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <label >
                            Correo electrónico
                            <span className="asterisk">*</span>
                        </label>
                        <input name="email" value={inputs.email || ""}  onChange={handleChange} />
                        <label >
                            Contraseña  
                            <span className="asterisk">*</span>
                        </label>
                        <input name="password" value={inputs.password || ""}  onChange={handleChange} />
                    </fieldset>
                    <br />
                    <StyleRegisterButton type="submit" >
                        <span>Iniciar sesion</span>
                    </StyleRegisterButton>
                </form>
            </article>
        </StyleRegisterContainer>
      </StyleRegister>
    )
  }
  
  export default Register