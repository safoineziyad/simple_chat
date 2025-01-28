const ws = new WebSocket("ws://localhost:8080/ws");

ws.onmessage = (event) => {
    const messageData = JSON.parse(event.data);
    const chatMessages = document.getElementById("chatMessages");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", messageData.sender === "user" ? "user" : "other");
    messageDiv.textContent = messageData.text;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
};

function startChat() {
    document.getElementById('introContainer').style.display = 'none';
    document.getElementById('chatContainer').style.display = 'flex';
    }

    function sendMessage() {
        const input = document.getElementById("messageInput");
        const chatMessages = document.getElementById("chatMessages");

   if (input.value.trim() !== "") {
     const messageDiv = document.createElement("div");
   messageDiv.classList.add("message", "user");
   messageDiv.textContent = input.value;
   chatMessages.appendChild(messageDiv);
   chatMessages.scrollTop = chatMessages.scrollHeight;
   input.value = "";
  }
}
