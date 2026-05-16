// // function hello() {
// //   console.log('Hello World');
// // }

// // hello();

// // function nome(name) {
// //   console.log(name);
// // }

// // nome('Jean');

// // function nome2(name) {
// //   console.log(name);
// //   return 10;
// // }

// // nome2('Pedro');

// // let test = nome2;
// // console.log(nome2('Maria'));

// // function soma(a, b) {
// //   console.log(a + b);
// // }

// // soma(10, 20);

// // function soma2(x, y) {
// //   return x + y;
// // }

// // console.log(soma2(50, 100));

// // let testSoma = soma2;
// // console.log(testSoma(500, 1000));

// let lista = [
//   [50, 100, 320, 20],
//   [40, 80, 90, 100],
//   [1, 5, 10, 20],
// ];
// console.log(lista);

// lista[0][0] = 10;
// console.log(lista);

// lista.push([3, 5, 10, 20]);
// console.log(lista);

// console.log(lista[0][0]);

// console.log(lista[0][1] + lista[1][0]);

// let objeto = {
//   nome: 'Jean',
//   idade: 38,
//   fut: 'none',
// };
// console.log(objeto);

// objeto.fut = 'idk';
// console.log(objeto);

// console.log(`O nome do paciente é ${objeto.nome} e ele tem ${objeto.idade} anos`);

// TESTANDO DIFERENTES FORMAS DE CHAMAR A FUNÇÃO
// function test(a) {
//   return a * 2;
// }
// console.log(test(10));

// let copia = test;              //VAR que
// console.log(copia(100));

// console.log(`Seu código é e o valor é de ${copia(200)}`);       //Chamando VARiÁVEL

// console.log(`Seu código é e o valor é de ${test(200)}`);     //Chamando FUNÇÃO

//Aula:
function modelo(x, operacao) {
  //Função que recebe outra função como PARÂMETRO
  return operacao(x);
}

function dobrarNumero(numero) {
  //Função que recebe PARÂMETRO = numero e multiplica * 2
  return 2 * numero;
}

// let teste = dobrarNumero(10); //Variável que recebe o resultado/ EXECUTA a função
// console.log(teste);

let teste2 = modelo(5, dobrarNumero); //Recebe o resultado da execução da função;
console.log(teste2);

console.log(modelo(50, dobrarNumero));
