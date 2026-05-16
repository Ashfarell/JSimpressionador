// Exercício 1: Dada a string 'javascript é divertido', converta a palavra 'javascript' para letras
// // maiúsculas.

//EX1 - Solução 1 (hardcoded)
let string = 'javascript é divertido';
let mot = string.slice(0, 10);
let mot2 = string.slice(11, 22);
console.log('EX1 solução 1-  ' + mot.toUpperCase() + ' ' + mot2);

/// EX1 - Solução 2 (ARRAY)
let string10 = 'javascript é divertido';
let test = string10.split(' '); //transforma string em ARRAY

test[0] = test[0].toUpperCase(); //CAIXA ALTA apenas 1º item ARRAY
// console.log(test[0]);
console.log('EX1 solução 2 - ' + test.join()); //Usando join p/ juntar ARRAY

// EX1 - Solução 3 (replace)
let string12 = 'javascript é divertido';

console.log('EX1 solução 3 - ' + string12.replace('javascript', 'JAVASCRIPT'));

// Exercício 2: Dada a string "Aprendendo Javascript", extraia a palavra "Aprendendo" e,
// em seguida, converta essa palavra para letras minúsculas
let string2 = 'Aprendendo Javascript';
// console.log(string2);

let texto = string2.split(' ', 1); //split transforma string → array
console.log('EX2  -' + texto[0].toUpperCase());
// console.log(texto[0]);

// Exercício 3: Dada a string "Aprendendo Python", extraia a palavra "Python" e substitua por
// “Javascript”.
let string3 = 'Aprendendo Python';
let texto2 = string3.replace('Python', 'Javascript');
console.log('EX3 - ' + texto2);

// Exercício 4: Dada a string 'cadeira, mesa, sofá, armário', divida essa string em um array de
// produtos e remova o item 'sofá' da lista
let string4 = 'cadeira, mesa, sofá, armário';
// string4.splice(0, 2);
let texto3 = string4.split(','); //transforma string4 ==> ARRAY
console.log(texto3[0]); //confirma que texto3 = ARRAY

texto3.splice(2, 1);
console.log('EX4 - ' + texto3);
