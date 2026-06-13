// Treino #1 — Contar números positivos
console.log('EX1 ----------------------------------------------------------------');
const lista = [5, -2, 15, 20, -8, 0, 105];

function numerosPositivos(numero) {
  let count = 0;
  for (let i = 0; i < numero.length; i++) {
    if (numero[i] > 0) {
      count++;
    }
  }
  return count;
}

console.log(numerosPositivos(lista));
console.log('Fim EX1 -------------------------------------------------------------');

// Treino #2 — Existe algum número negativo?
const lista2 = [5, -50, 55, 10, 20, 1];
console.log('EX2 A)----------------------------------------------------------------');
function numeronegativo(numero2) {
  let count = 0;
  for (let i = 0; i < numero2.length; i++) {
    if (numero2[i] < 0) {
      count++;
    }
  }
  if (count > 0) {
    return true;
  }
  return false;
}

console.log(numeronegativo(lista2));
console.log('EX2 B)----------------------------------------------------------------');

function numeronegativoB(numero3) {
  for (let i = 0; i < numero3.length; i++) {
    if (numero3[i] < 0) {
      return true; //assim que encontrar Número negativo ==>RETURN encerra a função
    }
  }
  return false;
}

console.log(numeronegativoB(lista2));
console.log('Fim EX2 -------------------------------------------------------------');
