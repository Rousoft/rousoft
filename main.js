// main.js

document.addEventListener("DOMContentLoaded", () => {
  // --- Animación al hacer scroll ---
  const elements = document.querySelectorAll(".hero, .sobre, footer");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => {
    el.classList.add("invisible");
    observer.observe(el);
  });

  // --- Menú hamburguesa ---
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav.nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  // --- Crear partículas de fondo ---
  const createParticle = () => {
    const particle = document.createElement("div");
    particle.className = "particle";
    document.body.appendChild(particle);

    const size = Math.random() * 6 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = `${Math.random() * 100}vh`;

    particle.style.animationDuration = `${Math.random() * 3 + 2}s`;

    setTimeout(() => {
      particle.remove();
    }, 5000);
  };

  setInterval(createParticle, 300);
});
