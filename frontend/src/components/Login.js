import React from 'react'
import gatito from '../assets/GatitoAkshually.png'
import logo from '../assets/EducAIlogo.png'
import './Login.css'
import InputGroup from './InputGruop'


export default function Login() {
  return (
    <div id ='content'>
      <div id='login-page'>
        <img id='logo' src={logo} />
        <div id='contenido-login'>
          <h1 id = 'texto'>Iniciar Sesion</h1>
          
          <div className='field' id='email-input'>
            <label>Correo Electronico</label>
            <InputGroup type='email' id='email' placeholder='correo@edu.com' />
          </div>

          <div className='field' id='password-input'>
            <label>Contraseña</label>
            <InputGroup type='password' id='password' placeholder='***********' />
          </div>

          <button id = 'iniciarSesion'><label id='iniciarSesiontxt'>Iniciar Sesion</label></button>
        </div>
      </div>

      <img id='gatito' src={gatito} />

    </div>
  )
}
