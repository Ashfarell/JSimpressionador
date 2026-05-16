// // 1
// let nome = 'Jean';
// console.log(nome[0]);
// console.log((nome[0] = 'P'));
// console.log(nome);

// let a = '20';
// let b = 20;
// console.log(a == b);
// console.log(a === b);
// console.log(a + b);

// console.log(Number(a) + b);
// console.log(typeof a);

// let c = Number(a);
// console.log(typeof c);

// let lista = ['banana', 'maçã', 'laranja'];
// console.log(lista);
// console.log(lista[0]);
// console.log((lista[0] = 'pera'));
// console.log(lista);

// let idade = 18;
// let autorizacaoPais = true;
// console.log(idade >= 18 || !autorizacaoPais);

// console.log(`O nome é ${nome} e a idade é ${idade}`);

// if (idade >= 18 && autorizacaoPais) {
//   console.log(
//     `A idade é de ${idade} e a autorização para entrar na festa é ${autorizacaoPais}`
//   );
// } else {
//   console.log('Não pode entrar na festa');
// }

let name = 'Café';
console.log(name[0]);
console.log((name[0] = 'P'));
console.log(name);

let a = '50';
let b = 50;
console.log(a == b);
console.log(a === b);
console.log(typeof a);
console.log(a + b);

let c = Number(a);
console.log(c);
console.log(c + b);
console.log(typeof c + ' ') + console.log(c + b);

let contaBB = '100000';

let savings = Number(contaBB);
let carro = 15000;
let financimanento = true;
console.log(typeof savings);

if (savings >= carro && financimanento) {
  console.log(
    `Seu saving é de ${savings} e o financiamento é: ${financimanento}` // contaBB é string, carro é number, então a comparação não funciona como esperado. O ideal seria converter contaBB para number antes da comparação.
  );
} else {
  console.log(`Não pode comprar o carro`);
}

let j = 10;
let z = 20;
while (j <= z) {
  console.log(j);
  j++;
}

let listaA = ['astra', 'pajero', 'gol'];
console.log(listaA[2]);

listaA[1] = 'fusca';
console.log(listaA);

listaA.push('celta');
console.log(listaA);

console.log(typeof listaA);

let pais = 'Brasil';
let negociacao = true;
let pais2 = 'Argentina';

if (pais == pais2 && autorizacaoPais) {
  console.log(
    `Os países são: ${pais} e ${pais2} e a negociação é ${negociacao}`
  );
} else {
  console.log('Não pode negociar');
}

typeof pais == Number;
if (typeof pais === typeof pais);
console.log('OK');

let matriz = [
  [5, 7, 9, 21, 35],
  [25, 0, 32, 23, 5],
  [15, 8, 12, 19, 27],
];
// console.log(matriz);
matriz[1][0] = 100;
// console.log(matriz);
matriz[0][0] = 50;
// console.log(matriz);

// console.log(matriz.length);

matriz.push([10, 100, 500, 5000]);
matriz.push([0.0, 0]);
console.log(
  'A matriz tem os números ' + matriz + ' e tem ' + matriz.length + ' elementos'
);

matriz.splice(1, 0, [1000, 20000, 3000]);
console.log(matriz);

let somaMatriz = matriz[0][0] + matriz[0][1];
console.log(somaMatriz);

let somaMatriz2 = matriz[0][0] + matriz[1][0] + matriz[4][3];
console.log(somaMatriz2);
