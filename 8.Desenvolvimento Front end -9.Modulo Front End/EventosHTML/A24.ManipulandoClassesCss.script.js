let meuElemento = document.getElementById('meuElemento');

function tornarCirculo() {
  meuElemento.classList.add('circle');
  meuElemento.classList.remove('square');
}

function tornarQuadrado() {
  meuElemento.classList.add('square');
  meuElemento.classList.remove('circle');
}

function alternarFormato() {
  meuElemento.classList.toggle('circle');
  meuElemento.classList.toggle('square');
}

function verificarClasse() {
  if (meuElemento.classList.contains('circle')) {
    //retorna valor booleano
    console.log('O elemento possui a clase circle');
  } else {
    console.log('O elemento possui classe quadrado');
  }
}
