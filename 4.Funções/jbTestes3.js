// Funções de Alta Ordem
// 1º Função que recebe função como PARÂMETRO

// function soma(a, b) {
//   return a + b;
// }

// console.log(soma(5, 10));

// function soma(a, b) {
//   console.log(a + b);
// }
// soma(5, 10);

function somarValores(x) {
  return function (numero) {
    return x + numero;
  };
}

let test = somarValores(50);
console.log(test(100)); // 150
console.log(test(300));
console.log(test(400));

//OUTRA FORMA
function divisao(y, ops) {
  return ops(y);
}

function dividir(numero) {
  return numero / 2;
}

let test2 = divisao(10, dividir);
console.log(test2);
