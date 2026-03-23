function abrirCarta() {
  const envelope = document.getElementById('envelope');
  envelope.classList.add('aberto');

  setTimeout(() => {
    envelope.style.display = 'none';
    document.getElementById('carta').classList.remove('hidden');
  }, 1000);
}

function mostrarFinal() {
  document.getElementById('final').classList.remove('hidden');
}