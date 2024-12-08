import React, { useState } from 'react';
import './Chatbot.css'; // Asegúrate de tener un archivo CSS asociado para los estilos

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleSend = async () => {
    if (!userInput.trim()) return;

    // Agregar mensaje del usuario a la conversación
    const newMessages = [...messages, { sender: 'user', text: userInput }];
    setMessages(newMessages);

    try {
      const response = await fetch('http://localhost:3000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userInput }),
      });
      const data = await response.json();

      // Agregar respuesta del bot a la conversación
      setMessages([...newMessages, { sender: 'bot', text: data.reply }]);
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      setMessages([
        ...newMessages,
        { sender: 'bot', text: 'Ocurrió un error. Por favor, intenta de nuevo.' },
      ]);
    }

    setUserInput('');
  };

  return (
    <div className="chatbot-container">
      <div className="chatbox">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.sender === 'user' ? 'user-message' : 'bot-message'}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Escribe tu pregunta..."
        />
        <button onClick={handleSend}>Enviar</button>
      </div>
    </div>
  );
};

export default Chatbot;
