// 🧠 EX Rec-A — Contagem regressiva

function contagemRegressiva(n) {
  console.log(n); //CONTGEM REGRESSIVA ==>console.log ANTES da chamada
  if (n == 1) {
    return;
  }
  return contagemRegressiva(n - 1);
}
contagemRegressiva(5);
console.log('FIM EX Rec-A------------------------------------------------------------------------------------------------------');

// EX Rec-B
function contagemCrescente(n) {
  if (n === 0) {
    return 1;
  }

  contagemCrescente(n - 1);
  console.log(n); //CONTGEM PROGRESSIVA ==>console.log DEPOIS da chamada
}
console.log('A');
contagemCrescente(5);

function contagemCrescenteB(n) {
  if (n === 1) {
    console.log(1);
    return;
  }
  contagemCrescenteB(n - 1);
  console.log(n);
}

console.log('B');
contagemCrescenteB(5);

console.log('FIM EX Rec-B------------------------------------------------------------------------------------------------------');

// EX Rec-C — Soma simples
function somaSimples(n) {
  if (n == 1) {
    return 1;
  }

  return n + somaSimples(n - 1);
}

console.log(somaSimples(5)); //PRINT foca porque só tem UM valor FINAL p/ devolver

console.log('FIM EX Rec-C------------------------------------------------------------------------------------------------------');

// EX Rec-D — Multiplicação (sem usar *)

function multiplicar(a, b) {
  console.log(a); //p/ verificar
  console.log(b); //p/ verificar
  if (b == 0) {
    return 0;
  }
  //   b--;
  return a + multiplicar(a, b - 1);
}
console.log(multiplicar(4, 3));
console.log('FIM EX Rec-D------------------------------------------------------------------------------------------------------');

// EX Rec-E — Somar elementos do array
const listaE = [2, 4, 6];

function somaArray(lista) {
  console.log(lista.length);
  if (lista.length === 0) {
    return 0;
  }
  return lista[0] + somaArray(lista.slice(1));
}

console.log(somaArray(listaE));
console.log('FIM EX Rec-E------------------------------------------------------------------------------------------------------');

// EX Rec-F — Maior número do array
const listaF = [8, 3, 20, 6, 15];

function maiorArray(lista) {
  if (lista.length === 0) {
    return 0;
  }
  let maior = maiorArray(lista.slice(1));
  if (lista[0] > maior) {
    maior = lista[0];
  }
  return maior;
}

console.log(maiorArray(listaF));
console.log('FIM EX Rec-F------------------------------------------------------------------------------------------------------');

// EX Rec-G — Contar quantos números pares existem no array
const listaG = [2, 5, 8, 9, 10, 3];

function contarPar(lista) {
  if (lista.length === 0) {
    return 0;
  }
  let count = contarPar(lista.slice(1));
  if (lista[0] % 2 === 0) {
    count++;
  }
  return count;
}
console.log(contarPar(listaG));

console.log('FIM EX Rec-G------------------------------------------------------------------------------------------------------');

// EX Rec-H — Contar quantas letras existem numa palavra

function contarLetras(palavra) {
  if (palavra === '') {
    return 0;
  }
  let qtd = contarLetras(palavra.slice(1));
  if (palavra === '') {
    qtd++;
  }
  return qtd;
}

console.log(contarLetras('banana'));

console.log('FIM EX Rec-H------------------------------------------------------------------------------------------------------');
