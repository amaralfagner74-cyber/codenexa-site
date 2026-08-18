const form = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");
document.getElementById("year").textContent = new Date().getFullYear();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  feedback.textContent = `Obrigado, ${name}! Este formulário é apenas demonstrativo. Configure aqui seu e-mail, WhatsApp ou backend.`;
  form.reset();
});

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
