import React from 'react'
import gatito from '../assets/GatitoAkshually.png'
import logo from '../assets/EducAIlogo.png'
import './Login.css'
import InputGroup from './InputGruop'


export default function Login() {
  return (
    <div>
      <div className='login-page'>
        <img src={logo} />
        <div id='contenido login'>
          <h1>Iniciar Sesion</h1>
          <div className='email-input'>
            <label>Correo Electronico</label>
            <InputGroup type='email' id='email' placeholder='correo@edu.com' />
          </div>
          <div className='password-input'>
            <label>Contraseña</label>
            <InputGroup type='password' id='password' placeholder='***********' />
          </div>
        </div>
      </div>
      <img src={gatito} />
    </div>
  )
}
