function mudarCor() {
  document.getElementById('testeScript').style.color = 'grey';
}

function voltarCor() {
  document.getElementById('testeScript').style.color = 'black';
}

function mudarEVoltarCor(cor) {
  document.getElementById('testeScript1').style.color = cor;
}

// Solução HASHTAG
function mudarCorHashTag(elemento, cor) {
  elemento.style.color = cor;
}

function msgNoClick() {
  console.log('Botão clicado');
}

function msgAlerta() {
  alert('Botão clicado!');
}

function comFoco() {
  document.getElementById('INPUT2').value = 'Campo em foco';
}

function tirarFoco() {
  document.getElementById('INPUT2').value = ' ';
}

function comESemFoco(texto) {
  document.getElementById('INPUT3').value = texto;
}

function mudarImagem() {
  document.getElementById('imagemMisteriosa1').src = 'imagem2.png';
}

function voltarImagem() {
  document.getElementById('imagemMisteriosa1').src = 'imagem1.png';
}

function mudarEVoltarImagem(img) {
  document.getElementById('imagemMisteriosa2').src = img;
}
