// Exercício 1 — Área do Círculo

function calcularAreaCurculo(raio) {
  const expoente = 2;
  return Math.pow(raio, expoente) * Math.PI;
}
console.log('EX1 - Área do Círculo: ' + calcularAreaCurculo(3).toFixed(2));

// console.log(Math.PI.toFixed(2));

// Exercício 2 — Hipotenusa
// a² + b² = c²
function calcularHipotenusa(catetoA, catetoB) {
  return Math.sqrt(Math.pow(catetoA, 2) + Math.pow(catetoB, 2));
}

console.log('EX2 -direto Hipotenusa: ' + calcularHipotenusa(3, 4).toFixed(2));

function calcularHipotenusa2(catetoA, catetoB) {
  const a = Math.pow(catetoA, 2);
  const b = Math.pow(catetoB, 2);
  const c = a + b;
  return Math.sqrt(c);
}
console.log('EX2 -C/ VAR Hipotenusa: ' + calcularHipotenusa2(3, 4).toFixed(2));

// Exercício 3 — Arredondar Nota

function arredondarNota(nota) {
  return Math.round(nota);
}

console.log('EX3 - Arredondar Nota: ' + arredondarNota(7.3));

// Exercício 4 — Número Aleatório de 1 a 10
function gerarNumero() {
  const numero = Math.random() * 10; //Definir VAR p/ fazer um único "Sorteio" de random

  if (numero < 1) {
    return 1;
  } else {
    return numero;
  }
}

console.log('EX4 FUNÇÃO- Número Aleatório: ' + Math.round(gerarNumero()));

function gerarNumero2() {
  return Math.ceil(Math.random() * 10);
}

console.log('EX4 S/ IF Número Aleatório: ' + Math.round(gerarNumero2()));
