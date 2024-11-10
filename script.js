// script.js

document.addEventListener("DOMContentLoaded", function () {
  const messages = ["Programmer", "Cybersecurity", "Security hacker"];

  let messageIndex = 0;
  const taglineElement = document.getElementById("tagline");

  function changeMessage() {
    taglineElement.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
  }

  setInterval(changeMessage, 3000);
  changeMessage();
});
