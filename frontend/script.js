document.getElementById('sendButton').addEventListener('click', sendMessage);

function sendMessage() {
  const userInput = document.getElementById('userInput').value.trim();
  if (!userInput) return;

  const chatbox = document.getElementById('chatbox');
  chatbox.innerHTML += `<p><strong>Usuario:</strong> ${userInput}</p>`;

  fetch('http://localhost:3000/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: userInput }),
  })
    .then(response => response.json())
    .then(data => {
      chatbox.innerHTML += `<p><strong>Bot:</strong> ${data.reply}</p>`;
      chatbox.scrollTop = chatbox.scrollHeight;
    })
    .catch(error => console.error('Error:', error));

  document.getElementById('userInput').value = '';
}
