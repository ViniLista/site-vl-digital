// Exemplo simples de JS (pode ser expandido depois)
document.addEventListener("DOMContentLoaded", () => {
  console.log("Site VLS Digital carregado!");
});

const typeWriter = document.getElementById("typewriter-text");
const text = "VL Digital";

typeWriter.innerHTML = text;
typeWriter.style.setProperty("--characters", text.length);