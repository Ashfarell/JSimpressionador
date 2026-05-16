// Exercício 1: Dado o array ['Produto A', 'Produto B'], adicione 'Produto C' ao final,
// remova o primeiro item e exiba o carrinho atualizado.
console.log('Exercício 1:');
let lista = ['Produto', 'Produto B'];
lista.push('Produto C');
console.log(lista);
lista.splice(0, 1);
// lista.shift();
console.log(lista);

// Exercício 2: Dado o array ['Produto X', 'Produto Y'], adicione 'Produto Z' ao final
// e una com a nova lista ['Produto A', 'Produto B'].
// Exiba a lista final de produtos disponíveis.
console.log('Exercício 2:');
let lista2 = ['Produto X', 'Produto Y'];
// console.log(lista2);
lista2.push('Produto Z');
console.log(lista2);

let lista3 = ['Produto A', 'Produto B'];
let lista4 = lista2.concat(lista3);
console.log(lista4);
console.log(lista3 + ' ' + lista4);

// Exercício 3: Dado o array ['Caderno', 'Lápis', 'Estojo'], verifique se 'Lápis' e
// 'Agenda' estão presentes no estoque

let material = ['Caderno', 'Lápis', 'Estojo'];
console.log(material.includes('Lápis'));
console.log(material.includes('Agenda'));

// Exercício 4: Dado o array [2, 5, 8, 1], verifique se pelo menos um dos números é maior
// que 7.
let numeros = [2, 5, 8, 1];
console.log(numeros.some((numero) => numero > 7) + ' que algum número é maior que 7');
console.log(numeros.every((numero) => numero > 7) + ' que todos os números são maiores que 7');

// Exercício 5: Dado o array [4, 6, 8, 2], verifique se todos os números são maiores que 3
let lista5 = [4, 6, 8, 2];
console.log(lista5.every((numero) => numero > 3) + ' que todos os números são maiores que 3');
