// Exercício 1: Dado o array ['Produto A', 'Produto B'], adicione 'Produto C' ao final,
// remova o primeiro item e exiba o carrinho atualizado.
let produto = ['Produto A', 'Produto B'];
console.log(produto);
// EX1 - 1º solução  (PUSH + SPLICE)
produto.push('Produto C'); //add "C"
console.log(produto);
console.log(produto.splice(0, 1)); // Removendo A
console.log('EX1 - 1º solução: ' + produto);

// EX1 - 2º solução          (SPLICE)
let produto2 = ['Produto A', 'Produto B'];
console.log(produto2);
produto2.splice(2, 0, 'Produto C'); //add "C"
produto2.splice(0, 1); // Removendo A
console.log('EX1 - 2º solução: ' + produto2);

// Exercício 2: Dado o array ['Produto X', 'Produto Y'], adicione 'Produto Z' ao final
// e una com a nova lista ['Produto A', 'Produto B']. Exiba a lista final de produtos
// disponíveis.
let produto3 = ['produto X', 'Produto Y'];
// EX2 - 1º solução
produto3.splice(2, 0, 'Produto Z'); //Poderia ter sido PUSH

let novalista = ['Produto A', 'Produto B'];

console.log('EX2 - 1º solução - ' + produto3 + ' ' + novalista);

// EX2 - 2º solução
let consolidade = produto3.concat(novalista); //concat
console.log('EX2 - 2º solução - ' + consolidade);
// Exercício 3: Dado o array ['Caderno', 'Lápis', 'Estojo'], verifique se 'Lápis' e
// 'Agenda' estão presentes no estoque

let material = ['Caderno', 'Lápis', 'Estojo'];
console.log(material.includes('Estojo'));
console.log(material.includes('Agenda'));

// Exercício 4: Dado o array [2, 5, 8, 1], verifique se pelo menos um dos números é maior
// que 7.
let numeros = [2, 5, 8, 1];
//EX4 - 1º solução
console.log('EX4 - 1º solução: ' + numeros.some((numero) => numero >= 7)); //Necessário converter número p/ string p/ utilizar includes

// Exercício 5: Dado o array [4, 6, 8, 2], verifique se todos os números são maiores que 3
let lastLista = [4, 6, 8, 2];

//EX5 - 1º solução
console.log('EX5 - 1º solução - ' + lastLista.every((numero) => numero >= 3));
