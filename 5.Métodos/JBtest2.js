// let texto = 'maçã banana uva morango';
// // console.log(texto);
// console.log(texto.split(' ', 2));

// console.log(texto);

// let carros = 'astra gol voyage sandero';
// let texto2 = carros.split(' ');

// texto2.splice(1, 1);
// console.log(texto2);

// Exercício 1: Dada a string 'javascript é divertido', converta a palavra 'javascript' para letras
// // maiúsculas.
// EX1 - Solução 2 (ARRAY)
let string = 'javascript é divertido';
let test = string.split(' '); //transforma string em ARRAY

test[0] = test[0].toUpperCase(); //CAIXA ALTA apenas 1ºitem ARRAY
console.log(test[0]);
console.log(test.join()); //Usando join p/ juntar ARRAY

// EX1 - Solução 3 (replace)
let string2 = 'javascript é divertido';

console.log(string2.replace('javascript', 'JAVASCRIPT'));

// Exercício 2: Dada a string "Aprendendo Javascript", extraia a palavra "Aprendendo" e,
// em seguida, converta essa palavra para letras minúsculas

let frase = 'Aprendendo Javascrip';
let frase2 = frase.split(' ', 1);
console.log(frase2[0].toLowerCase());
console.log(frase2[0].toUpperCase());

// Exercício 3: Dada a string "Aprendendo Python", extraia a palavra "Python" e substitua por
// “Javascript”.
let string3 = 'Aprendendo Python';
console.log(string3.replace('Python', 'Javascript'));

// Exercício 4: Dada a string 'cadeira, mesa, sofá, armário', divida essa string em um array de
// produtos e remova o item 'sofá' da lista
let string4 = 'cadeira, mesa, sofá, armário';

let lista2 = string4.split(' ');

lista2.splice(2, 1);
console.log(lista2);
