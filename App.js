function falar(texto) {
  if ('speechSynthesis' in window) {
    const fala = new SpeechSynthesisUtterance(texto);
    fala.lang = 'pt-BR';
    fala.rate = 1.0;
    fala.pitch = 1.0;
    speechSynthesis.speak(fala);
  } else {
    alert('Voz não disponível.');
  }
}

function ir(pagina) {
  const tela = document.getElementById('tela');
  tela.innerHTML = `<h2>${pagina}</h2><p>Conteúdo aqui.</p>`;
  if (pagina === 'falar') {
    falar('Oi! Sou XGaia. Fale o que precisa.');
  }
}
