// "Resolução do exercício 1
const nota1 = 8;
const nota2 = 5.5;
const nota3 = 6.5;

// 1º FORMA
function media(a, b, c) {
  return (a + b + c) / 3;
}

console.log('EX1 - 1º FORMA: A média desse aluno é: ' + media(nota1, nota2, nota3));

// 2º FORMA
let mdia2 = media(nota1, nota2, nota3);
console.log('EX1 - 2º FORMA: A média desse aluno é: ' + mdia2);

//3º FORMA (HASHTAG)
function calcularMedia(nota1, nota2, nota3) {
  const mediaDasNotas = (nota1 + nota2 + nota3) / 3;
  console.log(`Ex1 - 3º FORMA (HASHTAG): A média das notas é ${mediaDasNotas}`);
}
calcularMedia(8, 5.5, 6.5);

// "Resolução do exercício 2
let PF = 7.5;
const media1 = media(nota1, nota2, nota3);

// 1º FORMA
function media2(a, b) {
  return (a + b) / 2;
}

console.log('Ex2 - 1 FORMA: A média final desse aluno é: ' + media2(media1, PF));

// 2º FORMA:   //ERRO  ????
function media3(x, y) {
  return (x + y) / 2;
}

console.log('Ex2 - 2º FORMA: ' + media3(media(nota1, nota2, nota3), PF));

// 3º FORMA (HASHTAG)
function calcularMediaAdaptado(nota1, nota2, nota3) {
  const mediaDasNotas = (nota1 + nota2 + nota3) / 3;
  return mediaDasNotas;
}

function calcularMediaFinal(nota1, nota2, nota3, notaPf) {
  const mediaSemPf = calcularMediaAdaptado(nota1, nota2, nota3);
  const mediaFinal = (mediaSemPf + notaPf) / 2;
  console.log(`EX2 - 3º FORMA (HASHTAG): A média final desse aluno é ${mediaFinal}`);
}

calcularMediaFinal(8, 5, 9, 8);

// "Resolução do exercício 3
// 1º FORMA
let temperatura = 43;
function temp(celsius) {
  return (9 / 5) * celsius + 32;
}
console.log('EX3 - 1º FORMA - A temperatura em Farenheit é de : ' + temp(temperatura));

// 2º FORMA
function converterTemp(celsius) {
  const convertPFarenheit = (9 / 5) * celsius + 32;
  console.log(`EX3 - 2º FORMA (HASHTAG): ${convertPFarenheit}`);
}

converterTemp(45);

// "Resolução do exercício 4
//1 FORMA
const tax = 8.875 / 100;
let produto = 50;

function calcImposto(a, b) {
  let precoFinal = a * b + b;
  return precoFinal;
}
let precofinal2 = calcImposto(tax, produto);
// console.log('EX4: ' + calcImposto(tax, produto)); //Como faço para imprimir o texto contendo o valor da variável?

console.log(`EX4 - 1º FORMA: O valor a ser pago é ${precofinal2}`);

// 2º FORMA:
function calcularImposto10(produto10) {
  const calculo10 = 1.08875 * produto10;
  console.log(`EX4 - 2º FORMA (HASHTAG): O valor a ser pago é: ${calculo10}`);
}

calcularImposto10(50);

// 3º FORMA:
function calcularImposto(produto, taxa) {
  const calculo = produto * (1 + taxa);
  console.log(`EX4  -3º FORMA: O valor a ser pago é: ${calculo}`);
}

calcularImposto(50, 8.875 / 100);
