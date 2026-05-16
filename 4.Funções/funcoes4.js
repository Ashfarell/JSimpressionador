function nome(name) {
  console.log(name);
  return 10;
}
nome('Jean');

let test = nome;
console.log(test('MeuTest')); //Isso já executa a função NOME ==>print "MeuTest"   + Return

//Chamar funçao com VAR ==> Função como expressão
function soma2(a, b) {
  return a + b;
}
//1. DECLARAÇÃO DE FUNÇÃO
let valor = soma2(10, 20);
console.log(valor);

console.log(soma2(100, 200));

//FUNÇÃO COMO EXPRESSÃO ==> Armazenar função dentro de uma variável
let total = function (a, b) {
  //Função S/ Nome
  return a + b;
};
console.log(total(1, 2));

function dobrar(numero) {
  return numero * 2;
}
console.log(dobrar(4));
