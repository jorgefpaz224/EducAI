import React, { useState } from 'react'
import gato from '../assets/GatitoAkshually.png';
import './Chatbot.css'

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleBot = () => {
        isOpen? setIsOpen(false) : setIsOpen(true);
    }
    const mandarMensaje = (e) =>{
        if (e.key === "Enter") {
            //this.form.submit()
            //enviar mensaje
        }
    }
    if (!isOpen) {
        return(
            <div className='btn-chatbot' onClick={toggleBot} >
                <img src={gato} alt=''></img>
            </div> 
        )
       
    } else{
        return (
        <div
        className='chatbot'>
            <button id='cerrar-chatbot' onClick={toggleBot} >
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28 16L16 28M16 16L28 28M42 22C42 33.0457 33.0457 42 22 42C10.9543 42 2 33.0457 2 22C2 10.9543 10.9543 2 22 2C33.0457 2 42 10.9543 42 22Z" stroke="#F8E4E0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            </button>
            <div className='chatbot-mensajes'>
                <p className='akshu-mensaje'>Hola, ¿qué puedo hacer hoy por ti?</p>
                <p className='akshu-mensaje'>Puedo ayudarte: 
                    <ul>
                        <li>Creando un cuestionario</li>
                        <li>Sintetizando tus ideas</li>
                    </ul></p>
                
                </div>
            <form id='chatbot-form'>
                <input type='text' id='chatbot-input'
                placeholder='Preguntale algo a AKSHU...'
                //value={mensajeUsuario}
                onKeyUp={(e)=> mandarMensaje(e)}></input>
            </form>
            <img src={gato} alt=''></img>
        </div>
        )
    }
}

export default Chatbot