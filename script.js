const form = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");
document.getElementById("year").textContent = new Date().getFullYear();

// Configure o seu número com DDI (+55) + DDD + Número (apenas dígitos)
const WHATSAPP_NUMBER = "551988889113"; 

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  // Formatação do texto da mensagem
  const text = `*Novo contato via CodeNexa*\n\n` +
               `*Nome:* ${name}\n` +
               `*E-mail:* ${email}\n` +
               `*Assunto:* ${subject}\n\n` +
               `*Mensagem:*\n${message}`;

  // Monta a URL do WhatsApp API
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

  // Exibe mensagem de confirmação para o usuário
  feedback.style.color = "var(--primary)";
  feedback.textContent = "Redirecionando para o WhatsApp...";

  // Abre o WhatsApp em uma nova aba
  window.open(whatsappUrl, "_blank");

  // Limpa o formulário após o envio
  form.reset();
});

// Menu mobile (mantido conforme seu script original)
document.querySelector(".menu-btn").addEventListener("click", () => {
  const nav = document.querySelector("nav");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  nav.style.position = "absolute";
  nav.style.top = "68px";
  nav.style.left = "0";
  nav.style.right = "0";
  nav.style.padding = "18px";
  nav.style.background = "#fff";
  nav.style.flexDirection = "column";
  nav.style.borderBottom = "1px solid #e4e7ec";
});