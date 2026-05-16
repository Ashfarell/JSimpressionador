// Exercícios- Métodos nativos Array
// Exercício 1: Dado o array ['Produto A', 'Produto B'], adicione 'Produto C' ao final,
// remova o primeiro item e exiba o carrinho atualizado.
let lista1 = ['Produto A', 'Produto B'];
lista1.push('Produto C');
lista1.shift();
console.log('EX1 ' + lista1);

// lista1.splice(2, 0, 'Produto D');
// console.log(lista1);

// Exercício 2: Dado o array ['Produto X', 'Produto Y'], adicione 'Produto Z' ao final
// e una com a nova lista ['Produto A', 'Produto B']. Exiba a lista final de produtos
// // disponíveis.
let lista2 = ['Produto x', 'Produto Y'];
lista2.splice(2, 0, 'Produto Z');
console.log(lista2);

let lista2b = ['Produto A', 'Produto B'];
console.log(lista2b[0].toLowerCase());
console.log('EX2 ' + lista2 + lista2b);

// Exercício 3: Dado o array ['Caderno', 'Lápis', 'Estojo'], verifique se 'Lápis' e
// 'Agenda' estão presentes no estoque.
let lista3 = ['Caderno', 'Lápis', 'Estojo'];
console.log('EX3 A - ' + lista3.includes('Lápis'));
console.log('EX3 B - ' + lista3.includes('Estojo'));
// Exercício 4: Dado o array [2, 5, 8, 1], verifique se pelo menos um dos números é maior
// que 7
let lista4 = [2, 5, 8, 1];
console.log('EX 4 - ' + lista4.some((numero) => numero > 7));
console.log(lista4.some((numero) => numero > 10));

// Exercício 5: Dado o array [4, 6, 8, 2], verifique se todos os números são maiores que 3.
let lista5 = [4, 6, 8, 2];
console.log('EX 5 ' + lista5.every((numero) => numero > 3));
//--------------------------------------------------------------------------------------------------

// Exercícios- Métodos nativos String
console.log('Exercícios- Métodos nativos String');

// Exercício 1: Dada a string 'javascript é divertido', converta a palavra 'javascript' para letras
// maiúsculas.
let JS = 'Javascript é divertido';
console.log('EX 1 ' + JS.replace('Javascript', 'JAVASCRIPT'));

// Exercício 2: Dada a string "Aprendendo Javascript", extraia a palavra "Aprendendo" e,
// emseguida, converta essa palavra para letras minúsculas
let learn = 'Apredendendo Javascript"';
console.log('EX 2' + learn.slice(0, 12).toUpperCase());

// let learn2 = learn.split(')');
// console.log(typeof learn2);

// Exercício 3: Dada a string "Aprendendo Python", extraia a palavra "Python" e substitua por
// “Javascript”.
let learn3 = 'Aprendendo Python';
console.log('EX 3a ' + learn3.replace('Python', 'Javascript'));

let array = learn3.split(' ');
// console.log(array);
array.splice(1, 1);
array.push('Javascript');
console.log('EX 3b ' + array);

// Exercício 4: Dada a string 'cadeira, mesa, sofá, armário', divida essa string em um array de
// produtos e remova o item 'sofá' da lista.
let casa = 'cadeira, mesa, sofá, armário';
let casaArray = casa.split(' ');
console.log(casaArray);
casaArray.splice(2, 1);
console.log(casaArray);

//FUNÇÕES
// function soma(a, b) {
//   return a + b;
// }
// console.log(soma(5, 10));

// function hello() {
//   console.log('Hello hdhahd');
// }
// hello();

// function hello2(name) {
//   return console.log('Hello ' + name);
// }

// hello2('Jean');

let lista100 = [1, 2, 3, 4, 5];
console.log(lista100.some((numero) => numero > 2));

let objeto = {
  nome: 'jean',
  idade: 30,
  teste: function (name) {
    return console.log('Esse é o teste do  ' + name);
  },
};
objeto.idade = 31;
objeto.cidade = 'São Paulo';
console.log(objeto);

objeto.teste(objeto.nome);

console.log(Object.keys(objeto));
console.log(Object.values(objeto));

Object.assign(objeto, { profissao: 'Desenvolvedor' });
console.log(objeto);

delete objeto.idade;
console.log(objeto);

let num = '25';
let b = 10;
console.log(num + b);
console.log(Number(num) + b);

function somaTest(a, b) {
  console.log('Essa função retorna a soma de ' + a + ' e ' + b + ' que é igual à ' + (a + b));
  return a + b;
}
console.log(somaTest(Number(num), 100));

somaTest(5, 10);

let casa2 = ['cadeira', 'mesa', 'sofá', 'armário'];
console.log(casa2[0]);

console.log(casa2.splice(4, 0, 'estante'));
console.log(casa2);

const carro = {
  marca: 'Toyota',
  modelo: 'Corolla',
  ano: 2020,
  funcCarro: function () {
    console.log('Esse é o carro ' + this.modelo + ' da marca ' + this.marca + ' do ano ' + this.ano);
  },
};
carro.ano = 2021;
console.log(carro.ano);
console.log(carro.funcCarro());
