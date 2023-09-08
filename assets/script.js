function alterarVideo(novoVideo, miniaturaClicada) {
  const videoPlayer = document.getElementById('player-de-video');
  videoPlayer.src = novoVideo;
  videoPlayer.play(); 

  const titulo = miniaturaClicada.getAttribute('data-title');
  const texto = miniaturaClicada.getAttribute('data-text');
  document.getElementById('titulo-da-miniatura').textContent = titulo;
  document.getElementById('texto-da-miniatura').textContent = texto;

  const miniaturas = document.querySelectorAll('.miniaturas img');
  miniaturas.forEach(miniatura => {
    miniatura.classList.remove('selecionada');
  });

  miniaturaClicada.classList.add('selecionada');
}
