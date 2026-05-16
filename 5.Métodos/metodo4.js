// .push()  ==> add item ao FINAL da lista
// .unshift ==>no ínicio da lista

let produtos = ['Carro', 'Barco', 'Avião', 'Moto'];

console.log(typeof produtos);

produtos.push('Heli');
console.log(produtos);

produtos.unshift('Navio');
console.log(produtos);

// .pop()   //remove último item
// .shift() //Remove 1º item
produtos.pop();
console.log(produtos);

// .sort()  ==>organiza lista      ***N/ funciona c/ NÚMEROS
// .revere() ==>ao contrário
let letras = ['z', 'x', 'a', 'b', 'e'];
letras.sort();
console.log(letras);
letras.reverse();
console.log(letras);

let numeros = [10, 5, 2, 105, 35];

// contat ==>concatener
let fusion = letras.concat(numeros);
console.log(fusion);

console.log(letras.indexOf('e'));
console.log(numeros.indexOf(5));

let almoço = ['frango', 'carne', 'ovo', 'peixe'];
console.log(almoço.indexOf('ovo'));
console.log(almoço[2]);

console.log(almoço.splice(0, 1));
console.log(almoço);

let pessoas = ['Jean', 'Bruno', 'Carmem', 'Daniel'];
console.log(pessoas.indexOf('Jean'));

// console.log(pessoas.splice(0, 1));
console.log(pessoas);

console.log(pessoas.splice(1, 1, 'Fátima')); //a partir do índice 1, delete 1 elemento ==>coloque "100"
console.log(pessoas);

// console.log(pessoas.includes('Daniel'));

// console.log(
//   pessoas.every(function (pessoa) {
//     return pessoa.includes('J');
//   })
// );

// console.log(
//   pessoas.some(function (pessoa) {
//     return pessoa.includes('n');
//   })
// );

let frutas = ['Melancia', 'Mamão', 'Melao', 'Manga'];
console.log(frutas.includes('Melancia'));

console.log(
  frutas.every(function (fruta) {
    return fruta.includes('a');
  })
);

// Arrow function
frutas.every((fruta) => fruta.includes('a'));
console.log(frutas.every((fruta) => fruta.includes('a')));

console.log(
  frutas.some(function (fruta) {
    return fruta.includes('l');
  })
);

// Arrow function
frutas.some((fruta) => fruta.includes('a'));
console.log(frutas.some((fruta) => fruta.includes('a')));

console.log(frutas.some((fruta) => fruta.includes('a')));
