// let a = '25';
// let b = 25;
// console.log(a == b);
// console.log(a === b);
// let c = a + b;
// console.log(c);
// let d = Number(a);
// console.log(d + b);

// let budget = '25000';
// let custo = 2800;
// let autorizacao = true;

// if (budget >= custo && autorizacao) {
//   console.log(`O Budget é de ${budget} e o custo é de ${custo}. A autorização é: ${autorizacao}`);
// } else {
//   console.log('Nok');
// }
// let budget2 = Number(budget);
// console.log(`O budget é de ${budget2} e o custo é de ${custo}. A autorização é: ${autorizacao}`);

// let objeto = {
//   nome: 'Jean',
//   idade: 38,
//   pais: 'FR',
// };

// console.log(objeto);
// console.log(objeto.idade);
// objeto.idade = 39;
// console.log(objeto);

// objeto.cidade = 'SP';
// console.log(objeto);
// delete objeto.cidade;
// console.log(objeto);

// let lista = [2, 5, 2, 3];
// console.log(lista);
// console.log(lista[0]);

// lista[0] = 100;
// // console.log(lista);

// lista2 = [
//   [50, 80, 90, 100],
//   [500, 100, 200, 2000],
//   [200, 300, 50, 80],
// ];
// console.log(lista2);

// console.log((lista2[0][0] = 5000));
// console.log(lista2);

// console.log(lista2[0][0] + lista2[1][0])

// function hello() {
//   console.log('Hello');
// }
// hello();

// function nome(name) {
//   console.log(name);
// }

// nome('Jean');

// function soma(a, b) {
//   console.log(a + b);
// }

// soma(5, 10);

// function soma2(a, b) {
//   return a + b;
// }

// console.log(soma2(20, 30));

//Funções de ALTA ORDEM
//1º Função que recebe função como PARÂMETRO

// function teste(x, operacao) {
//   return operacao(x);
// }

// function dobrar(numero) {
//   //poderia colocar x ao invés de "numero"
//   return numero * 2;
// }
// // console.log(dobrar(2));

// console.log(teste(10, dobrar));

// 2º Função que recebe função como RESULTADO

function mult3(variavel) {
  return function (numero) {
    return numero * variavel;
  };
}

let testeB = mult3(30)(10); //Chamando tudo junto
console.log(testeB);

let testC = mult3(30); // cria a função
console.log(testC(10)); // executa
