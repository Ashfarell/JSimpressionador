// 🧩 Exercício 1 — bem básico
function executar(funcao) {
  funcao();
}

function estudar() {
  console.log('Estou estudando JavaScript!');
}

executar(estudar);

// 🧠 Agora Exercício 2
function executar(funcao) {
  funcao('JavaScript');
}

executar((frase) => {
  console.log(frase);
});

// 🧩 Exercício 3
function processar(callback) {
  callback(10);
}

processar((multiplicar) => {
  console.log(multiplicar * 2);
});

// 🧩 Exercício 4 — dois parâmetros na callback
function processar(callback) {
  callback(10, 5);
}

processar((a, b) => {
  console.log(a + b);
});

// 🔥 Exercício 5 — agora vamos mudar o comportamento
function processar(callback) {
  callback(10, 5);
}

processar((a, b) => {
  console.log(a * b);
});

// 🧠 Agora quero testar se você realmente dominou
function calcular(callback) {
  callback(8, 3);
}

calcular((x, y) => {
  console.log(x - y);
});

// 🧩 Exercício 6 — Callback + return
function calcular(callback) {
  const resultado = callback(10, 5);

  console.log(resultado);
}

calcular((a, b) => {
  return a * b;
});

// 🧩 Exercício 7 — misturando tudo
function executarOperacao(callback) {
  const resultado = callback(20, 4);

  console.log(resultado);
}

executarOperacao((a, b) => {
  return a * b;
});

// 🧩 Exercício 8 — Callback + setTimeout

function executarDepois(callback) {
  setTimeout(callback, 2000);
}

executarDepois(() => {
  console.log('Estudei JavaScript!');
});

// 🔥 Exercício 9 — agora vamos colocar setInterval
function repetir(callback) {
  setInterval(callback, 1000);
}

repetir(() => {
  console.log('Estou estudando!');
});

// 🧩 Exercício 10 — agora vamos juntar TUDO
function executarDepois(callback) {
  setTimeout(() => {
    callback('JavaScript');
  }, 2000);
}

executarDepois((linguagem) => {
  console.log('Estou estudando ' + linguagem);
});
