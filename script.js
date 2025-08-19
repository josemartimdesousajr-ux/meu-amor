// CONTADOR DE DIAS
function calcularDiasJuntos() {
  const dataInicio = new Date("2025-01-11");
  const hoje = new Date();
  const diff = hoje - dataInicio;
  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("contador").innerText = dias;
}
calcularDiasJuntos();

// SLIDES DE FOTOS
const slides = document.querySelector(".slides");
const imagens = document.querySelectorAll(".slides img");
let index = 0;

document.querySelector(".next").addEventListener("click", () => {
  index = (index + 1) % imagens.length;
  atualizarSlide();
});
document.querySelector(".prev").addEventListener("click", () => {
  index = (index - 1 + imagens.length) % imagens.length;
  atualizarSlide();
});
function atualizarSlide() {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

// Música
const musica = document.getElementById('musica');
const btnMusica = document.getElementById('btnMusica');
let tocando = false;
btnMusica.addEventListener('click', () => {
  if (!tocando) {
    musica.play();
    btnMusica.textContent = '🔇 Parar Música';
    tocando = true;
  } else {
    musica.pause();
    btnMusica.textContent = '🎵 Tocar Música';
    tocando = false;
  }
});

// Botão AMOR - abre e fecha mensagem
const btnAmor = document.getElementById("btnAmor");
const overlay = document.getElementById("mensagemAmor");
const fecharMensagem = document.getElementById("fecharMensagem");

btnAmor.addEventListener("click", () => {
  overlay.style.display = "flex";
});
fecharMensagem.addEventListener("click", () => {
  overlay.style.display = "none";
});

// Corações caindo
function criarCoracao() {
  const coracao = document.createElement("div");
  coracao.classList.add("coracao");
  coracao.style.left = Math.random() * 100 + "vw";
  coracao.style.animationDuration = Math.random() * 2 + 3 + "s";
  coracao.innerText = ["💖","❤️","💕","💘"][Math.floor(Math.random()*4)];
  document.body.appendChild(coracao);
  setTimeout(() => coracao.remove(), 5000);
}
setInterval(criarCoracao, 300);
