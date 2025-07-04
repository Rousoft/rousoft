// ====== main.js ======

// Animaciones al hacer scroll
const secciones = document.querySelectorAll('.section');
const options = {
  threshold: 0.1
};

const aparecer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, options);

secciones.forEach(seccion => {
  aparecer.observe(seccion);
});

// Efecto de partículas (simple simulación de fondo vivo)
const fondo = document.querySelector('.animated-background');
const cantidad = 60;

for (let i = 0; i < cantidad; i++) {
  const estrella = document.createElement('div');
  estrella.classList.add('estrella');
  estrella.style.left = Math.random() * 100 + 'vw';
  estrella.style.top = Math.random() * 100 + 'vh';
  estrella.style.animationDuration = 3 + Math.random() * 2 + 's';
  fondo.appendChild(estrella);
}

// Estilos para partículas (se agrega aquí dinámicamente por simplicidad)
const estilo = document.createElement('style');
estilo.innerHTML = `
  .estrella {
    position: absolute;
    width: 4px;
    height: 4px;
    background: #d100ff;
    border-radius: 50%;
    box-shadow: 0 0 10px #ff00ff;
    animation: parpadeo linear infinite;
  }

  @keyframes parpadeo {
    0%, 100% { opacity: 0.2; transform: scale(0.8); }
    50% { opacity: 1; transform: scale(1.2); }
  }
`;
document.head.appendChild(estilo);

// Scroll suave para enlaces internos (menú y botón)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Animación de aparición para las tarjetas de servicios
window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.servicio-card');
  cards.forEach((card, i) => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(30px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }, i * 150);
  });
});
// main.js

// Al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
  // Animación de entrada para los enlaces de redes sociales
  const redes = document.querySelectorAll(".red-social");

  redes.forEach((red, i) => {
    red.style.opacity = 0;
    red.style.transform = "translateY(30px)";
    setTimeout(() => {
      red.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      red.style.opacity = 1;
      red.style.transform = "translateY(0)";
    }, i * 150); // entrada escalonada con delay
  });

  // Efecto de "glow" intermitente en el logo
  const logo = document.querySelector(".logo");
  if (logo) {
    let glowOn = true;
    setInterval(() => {
      if (glowOn) {
        logo.style.textShadow = "0 0 25px #bb00ff, 0 0 60px #ff00ff";
      } else {
        logo.style.textShadow = "none";
      }
      glowOn = !glowOn;
    }, 2000);
  }
});
// main.js para noticias.html

document.addEventListener("DOMContentLoaded", () => {
  const tweets = document.querySelectorAll(".tweet");

  tweets.forEach((tweet, index) => {
    tweet.style.opacity = 0;
    tweet.style.transform = "translateY(30px)";
    setTimeout(() => {
      tweet.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      tweet.style.opacity = 1;
      tweet.style.transform = "translateY(0)";
    }, index * 200); // entrada escalonada
  });

  // Efecto hover más marcado con sombra neón (se aplica también con CSS pero reforzamos en JS)
  tweets.forEach(tweet => {
    tweet.addEventListener("mouseenter", () => {
      tweet.style.boxShadow =
        "inset 0 0 30px #d100ffcc, 0 0 70px #ff00ffdd, 0 0 100px #ff33ffdd";
      tweet.style.transform = "translateY(-8px)";
      tweet.style.zIndex = "15";
    });
    tweet.addEventListener("mouseleave", () => {
      tweet.style.boxShadow =
        "inset 0 0 15px #6e00ff88, 0 0 20px #bb00ffcc";
      tweet.style.transform = "translateY(0)";
      tweet.style.zIndex = "1";
    });
  });

  // Glow parpadeante en el logo (opcional para toda la web)
  const logo = document.querySelector(".logo");
  if (logo) {
    let glow = true;
    setInterval(() => {
      logo.style.textShadow = glow
        ? "0 0 25px #bb00ff, 0 0 60px #ff00ff"
        : "none";
      glow = !glow;
    }, 2000);
  }
});
// main.js para proyectos.html

document.addEventListener("DOMContentLoaded", () => {
  const proyectos = document.querySelectorAll(".proyecto");
  const etiquetas = document.querySelectorAll(".etiqueta-desarrollo");
  const logo = document.querySelector(".logo");

  // Animación de entrada escalonada para proyectos
  proyectos.forEach((proyecto, i) => {
    proyecto.style.opacity = 0;
    proyecto.style.transform = "translateY(30px)";
    setTimeout(() => {
      proyecto.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      proyecto.style.opacity = 1;
      proyecto.style.transform = "translateY(0)";
    }, i * 180);
  });

  // Hover 3D con sombra neón y zoom para cada proyecto
  proyectos.forEach(proyecto => {
    proyecto.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
    proyecto.addEventListener("mouseenter", () => {
      proyecto.style.transform = "translateY(-10px) scale(1.05)";
      proyecto.style.boxShadow =
        "0 0 25px #bb00ffcc, 0 0 50px #ff00ffdd, 0 10px 25px #ff00ff88";
      proyecto.style.zIndex = "10";
    });
    proyecto.addEventListener("mouseleave", () => {
      proyecto.style.transform = "translateY(0) scale(1)";
      proyecto.style.boxShadow = "none";
      proyecto.style.zIndex = "1";
    });
  });

  // Brillo intermitente para etiquetas "En Desarrollo"
  if (etiquetas.length) {
    let glowOn = true;
    setInterval(() => {
      etiquetas.forEach(etiqueta => {
        etiqueta.style.textShadow = glowOn
          ? "0 0 10px #bb00ff, 0 0 20px #ff00ff"
          : "none";
      });
      glowOn = !glowOn;
    }, 1500);
  }

  // Glow parpadeante en el logo
  if (logo) {
    let glow = true;
    setInterval(() => {
      logo.style.textShadow = glow
        ? "0 0 25px #bb00ff, 0 0 60px #ff00ff"
        : "none";
      glow = !glow;
    }, 2000);
  }
});
// main.js para lilai.html

document.addEventListener("DOMContentLoaded", () => {
  // Animación de entrada para textos e imagen
  const textos = document.querySelectorAll(".contenido-lilai > *");
  textos.forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";
    setTimeout(() => {
      el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, i * 250);
  });

  // Botón PROBAR LilAI con efecto glow y pulso
  const botonProbar = document.querySelector(".btn-probar");
  if (botonProbar) {
    botonProbar.style.transition = "box-shadow 1.5s ease-in-out infinite";

    let glowOn = true;
    setInterval(() => {
      botonProbar.style.boxShadow = glowOn
        ? "0 0 30px #bb00ff, 0 0 60px #ff00ff"
        : "0 0 10px #770077";
      glowOn = !glowOn;
    }, 1500);

    // Pulsar suavemente con escala
    setInterval(() => {
      botonProbar.style.transform = "scale(1.05)";
      setTimeout(() => {
        botonProbar.style.transform = "scale(1)";
      }, 750);
    }, 1500);
  }

  // Logo o personaje LilAI (si existe) con movimiento flotante
  const lilaiImg = document.querySelector(".lilai-img");
  if (lilaiImg) {
    let direction = 1;
    let pos = 0;
    setInterval(() => {
      if (pos >= 10) direction = -1;
      if (pos <= 0) direction = 1;
      pos += direction;
      lilaiImg.style.transform = `translateY(${pos}px)`;
    }, 80);
  }

  // Glow parpadeante logo general
  const logo = document.querySelector(".logo");
  if (logo) {
    let glow = true;
    setInterval(() => {
      logo.style.textShadow = glow
        ? "0 0 25px #bb00ff, 0 0 60px #ff00ff"
        : "none";
      glow = !glow;
    }, 2000);
  }
});
// main.js para servicios.html

document.addEventListener("DOMContentLoaded", () => {
  const servicios = document.querySelectorAll(".servicio");
  const botonSolicitar = document.querySelector(".btn-solicitar");
  const logo = document.querySelector(".logo");

  // Animación de entrada escalonada para servicios
  servicios.forEach((servicio, i) => {
    servicio.style.opacity = 0;
    servicio.style.transform = "translateY(30px)";
    setTimeout(() => {
      servicio.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      servicio.style.opacity = 1;
      servicio.style.transform = "translateY(0)";
    }, i * 180);
  });

  // Hover dinámico para servicios: sombra neón y ligero zoom
  servicios.forEach(servicio => {
    servicio.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
    servicio.addEventListener("mouseenter", () => {
      servicio.style.transform = "scale(1.05)";
      servicio.style.boxShadow =
        "0 0 25px #bb00ffcc, 0 0 50px #ff00ffdd, 0 10px 30px #ff00ff88";
      servicio.style.zIndex = "10";
    });
    servicio.addEventListener("mouseleave", () => {
      servicio.style.transform = "scale(1)";
      servicio.style.boxShadow = "none";
      servicio.style.zIndex = "1";
    });
  });

  // Botón Solicitar con pulso y glow neón intermitente
  if (botonSolicitar) {
    let glowOn = true;

    setInterval(() => {
      botonSolicitar.style.boxShadow = glowOn
        ? "0 0 25px #bb00ff, 0 0 60px #ff00ff"
        : "0 0 10px #770077";
      glowOn = !glowOn;
    }, 1500);

    setInterval(() => {
      botonSolicitar.style.transform = "scale(1.05)";
      setTimeout(() => {
        botonSolicitar.style.transform = "scale(1)";
      }, 750);
    }, 1500);
  }

  // Glow parpadeante logo general
  if (logo) {
    let glow = true;
    setInterval(() => {
      logo.style.textShadow = glow
        ? "0 0 25px #bb00ff, 0 0 60px #ff00ff"
        : "none";
      glow = !glow;
    }, 2000);
  }
});
// Animaciones donar.html

document.addEventListener("DOMContentLoaded", () => {
  const titulo = document.querySelector(".intro-donar h2");
  const parrafos = document.querySelectorAll(".intro-donar p");
  const botones = document.querySelectorAll(".btn-donar");
  const logo = document.querySelector(".logo");

  // Entrada animada texto
  [titulo, ...parrafos].forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";
    setTimeout(() => {
      el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, i * 300);
  });

  // Botones con pulso y glow
  botones.forEach(boton => {
    let glowOn = true;
    setInterval(() => {
      boton.style.boxShadow = glowOn
        ? "inset 0 0 40px #ff00ffdd, 0 0 80px #ff33ffdd"
        : "inset 0 0 15px #bb00ffcc, 0 0 40px #bb00ffcc";
      glowOn = !glowOn;
    }, 2000);

    setInterval(() => {
      boton.style.transform = "scale(1.07)";
      setTimeout(() => {
        boton.style.transform = "scale(1)";
      }, 1000);
    }, 3000);
  });

  // Glow logo principal
  if (logo) {
    let glow = true;
    setInterval(() => {
      logo.style.textShadow = glow
        ? "0 0 30px #bb00ff, 0 0 80px #ff00ff"
        : "none";
      glow = !glow;
    }, 2000);
  }
});
