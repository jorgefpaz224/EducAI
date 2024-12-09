import React, { useState } from "react";
import gato from "../assets/GatitoAkshually.png";
import "./Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mensajeUsuario, setMensajeUsuario] = useState("");
  const [mensajes, setMensajes] = useState([]);

  const toggleBot = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  const handleSend = async () => {
    if (!mensajeUsuario.trim()) return;

    // Agregar mensaje del usuario a la conversación
    const newMessages = [...mensajes, { sender: "user", text: mensajeUsuario }];
    setMensajes(newMessages);

    try {
      const response = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: mensajeUsuario }),
      });
      const data = await response.json();

      // Agregar respuesta del bot a la conversación
      setMensajes([...newMessages, { sender: "bot", text: data.reply }]);
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      setMensajes([
        ...newMessages,
        {
          sender: "bot",
          text: "Ocurrió un error. Por favor, intenta de nuevo.",
        },
      ]);
    }

    setMensajeUsuario("");
  };

  if (!isOpen) {
    return (
      <div className="btn-chatbot" onClick={toggleBot}>
        <img src={gato} alt=""></img>
      </div>
    );
  } else {
    return (
      <div className="chatbot">
        <button id="cerrar-chatbot" onClick={toggleBot}>
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 16L16 28M16 16L28 28M42 22C42 33.0457 33.0457 42 22 42C10.9543 42 2 33.0457 2 22C2 10.9543 10.9543 2 22 2C33.0457 2 42 10.9543 42 22Z"
              stroke="#F8E4E0"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div className="chatbot-mensajes">
          {mensajes.map((msg, index) => (
            <div
              key={index}
              className={msg.sender === "user" ? "user-mensaje" : "akshu-mensaje"}
            >
              {msg.text}
            </div>
          ))}</div>
        <div className="input-container">
            <input id="chatbot-input"
                type="text"
                value={mensajeUsuario}
                onChange={(e) => setMensajeUsuario(e.target.value)}
                placeholder="Escribe tu pregunta..."
            />
            <button onClick={handleSend}>Enviar</button>
        </div>
        <img src={gato} alt=""></img>
      </div>
    );
  }
};

export default Chatbot;
