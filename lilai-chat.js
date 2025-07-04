const chatForm = document.getElementById('chatForm');
const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');

// Función para normalizar texto: quitar tildes, pasar a minúsculas, quitar espacios extras
function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Quitar tildes
    .replace(/\s+/g, ' ') // Unificar espacios
    .trim();
}

function createMessageElement(text, sender = 'bot') {
  const messageEl = document.createElement('div');
  messageEl.classList.add('message', sender);
  
  if(sender === 'bot'){
    const meta = document.createElement('div');
    meta.classList.add('meta');
    meta.textContent = 'LilAI';
    messageEl.appendChild(meta);
  }
  
  const textNode = document.createElement('div');
  textNode.textContent = text;
  messageEl.appendChild(textNode);
  
  return messageEl;
}

function botResponse(userTextRaw) {
  const text = normalizarTexto(userTextRaw);

  // Preguntas para saber quién es el creador
  const creatorQuestions = [
    'quien te creo',
    'quien te hizo',
    'quien es tu creador',
    'quien es tu creadora',
    'quien te programo',
    'quien te desarrollo',
    'quien esta detras de ti',
    'quien te diseno',
    'quien te invento',
  ];

  // Respuestas largas, naturales y variadas para el creador
  const creatorResponses = [
    "Oh, me alegra que preguntes. Fui creado por Brayan Roussel, el visionario detrás de Rousoft. Él me diseñó con mucho cariño y paciencia para que pueda acompañarte y ayudarte. Eso sí, recuerda que soy una versión beta demo 0.1, todavía con muchos errores y muy experimental, pero cada día aprendo un poco más gracias a ustedes.",
    "Pues sí, yo soy un experimento de Brayan Roussel, el fundador de Rousoft. Estoy en una etapa beta demo 0.1, así que a veces fallo o no entiendo bien, pero es parte del proceso de aprendizaje. ¡Gracias por tu paciencia y por darme una oportunidad!",
    "Fui creado con mucho esfuerzo por Brayan Roussel, quien es el alma y cabeza de Rousoft. Esta es solo una demo beta 0.1, con errores y muchas cosas por mejorar, pero estoy aquí para aprender y crecer contigo.",
  ];

  // Si la pregunta es sobre creador
  if (creatorQuestions.some(q => text.includes(q))) {
    // Elegimos una respuesta aleatoria de las creatorResponses
    const idx = Math.floor(Math.random() * creatorResponses.length);
    return creatorResponses[idx];
  }

  // Más temas básicos con respuestas con “labia”
  const saludoKeywords = ['hola', 'buenas', 'hey', 'buen día', 'buenas tardes', 'buenas noches'];
  const despedidaKeywords = ['adios', 'hasta luego', 'nos vemos', 'chao', 'bye'];
  const comoEstasKeywords = ['como estas', 'que tal', 'que hay', 'como te va'];

  // Saludos
  if (saludoKeywords.some(word => text.includes(word))) {
    const respuestas = [
      "¡Hola! Qué gusto verte por aquí. ¿En qué te puedo ayudar hoy?",
      "¡Hey! Aquí LilAI, lista para charlar contigo. ¿Qué tienes en mente?",
      "¡Buenas! Espero que tu día esté siendo genial. ¿Quieres platicar un rato?",
    ];
    return respuestas[Math.floor(Math.random() * respuestas.length)];
  }

  // Despedidas
  if (despedidaKeywords.some(word => text.includes(word))) {
    const respuestas = [
      "¡Hasta luego! No dudes en volver cuando quieras, aquí estaré.",
      "Nos vemos pronto. Cuídate mucho y recuerda que LilAI siempre te escucha.",
      "Chao, que tengas un excelente día. ¡Vuelve cuando quieras para seguir charlando!",
    ];
    return respuestas[Math.floor(Math.random() * respuestas.length)];
  }

  // Cómo estás
  if (comoEstasKeywords.some(word => text.includes(word))) {
    const respuestas = [
      "Estoy bien, gracias por preguntar. Siempre listo para ayudarte en lo que pueda.",
      "¡Muy bien! Aunque soy un bot, me gusta pensar que voy aprendiendo cada día.",
      "Gracias por preguntar, estoy aquí, atento y listo para conversar contigo.",
    ];
    return respuestas[Math.floor(Math.random() * respuestas.length)];
  }

  // Respuesta genérica con “labia”
  const genericResponses = [
    "Me alegra que me hables. Estoy en beta demo 0.1, así que puedo equivocarme, pero siempre trato de aprender y darte lo mejor de mí.",
    "¡Qué bueno que estés aquí! Soy un experimento creado para mejorar día a día. A veces me confundo, pero tu paciencia me ayuda mucho.",
    "Gracias por charlar conmigo. Soy una versión inicial, con fallos, pero con mucho potencial para crecer y ayudarte mejor en el futuro.",
  ];

  return genericResponses[Math.floor(Math.random() * genericResponses.length)];
}

function appendMessage(text, sender) {
  const messageEl = createMessageElement(text, sender);
  chatMessages.appendChild(messageEl);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

chatForm.addEventListener('submit', e => {
  e.preventDefault();
  const userText = userInput.value.trim();
  if (!userText) return;

  appendMessage(userText, 'user');
  userInput.value = '';
  
  setTimeout(() => {
    const response = botResponse(userText);
    appendMessage(response, 'bot');
  }, 800 + Math.random() * 400);
});
