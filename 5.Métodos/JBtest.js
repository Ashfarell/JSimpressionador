// // // function Oi() {
// // //   console.log('Hello');
// // // }
// // // Oi();

// // // function OLA(msg) {
// // //   console.log('oi amigo');
// // // }
// // // OLA();

// // // function OLA(msg) {
// // //   console.log(msg);
// // // }
// // // console.log(OLA('Escreve sua msg'));

// // let a = '25';
// // let b = 25;
// // console.log(a + b);
// // let c = Number(a);
// // // console.log(c + b);

// // // function soma(a, b) {
// // //   return a + b;
// // //   console.log(a + b);
// // // }
// // // soma(10, 20);

// // function soma(a, b) {
// //   console.log(a + b);
// // }

// // soma(c, b);
// // soma(a, b);
// // soma(Number(a), b);

// // let autorizacao = true;
// // let budget = 2000;
// // let custo = 1900;
// // let saldo = budget > custo;

// // if (budget < custo && autorizacao) {
// //   console.log('OK');
// // } else {
// //   console.log('Hdhahdah');
// // }

// // console.log(saldo);
// // console.log(`Seu Budget é de ${budget} e seu saldo é: ${saldo} -  Sua autorização é ${autorizacao}`);

// //  Funções de Alta Ordem
// // 1º teste:
// function test(a, ops) {
//   return ops(a);
// }

// function dobrar(x) {
//   return 2 * x;
// }

// let resultado = test(10, dobrar);
// console.log(resultado);

// //2º teste
// function test2(operacao) {
//   return operacao;
// }

// function somar(a, b) {
//   return a + b;
// }

// let resultado2 = test2(somar(10, 20));
// // console.log(resultado2(10, 20));

function test(a) {
  return a;
}

console.log(test());

function teste() {
  console.log('Oi');
}

teste();

function teste2() {
  return console.log('hadhahd');
}

teste2();

function math(a, b) {
  console.log(a + b);
}

math(5, 10);
console.log(math(5, 10));
